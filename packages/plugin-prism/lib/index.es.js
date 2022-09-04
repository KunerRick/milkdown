import { $prose as mn } from "@milkdown/utils";
import { findChildren as se } from "@milkdown/prose";
import { Plugin as Sn, PluginKey as An } from "@milkdown/prose/state";
import { DecorationSet as wn, Decoration as Tn } from "@milkdown/prose/view";
B.displayName = "clike";
B.aliases = [];
function B(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
J.displayName = "c";
J.aliases = [];
function J(e) {
  e.register(B), e.languages.c = e.languages.extend("clike", {
    comment: {
      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
  }), e.languages.insertBefore("c", "string", {
    char: {
      pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
      greedy: !0
    }
  }), e.languages.insertBefore("c", "string", {
    macro: {
      pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
      inside: {
        string: [
          {
            pattern: /^(#\s*include\s*)<[^>]+>/,
            lookbehind: !0
          },
          e.languages.c.string
        ],
        char: e.languages.c.char,
        comment: e.languages.c.comment,
        "macro-name": [
          {
            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
            lookbehind: !0
          },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: "function"
          }
        ],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: "keyword"
        },
        "directive-hash": /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: {
          pattern: /\S[\s\S]*/,
          inside: e.languages.c
        }
      }
    }
  }), e.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
  }), delete e.languages.c.boolean;
}
ae.displayName = "cpp";
ae.aliases = [];
function ae(e) {
  e.register(J), function(n) {
    var a = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return a.source;
    });
    n.languages.cpp = n.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return a.source;
          })),
          lookbehind: !0
        },
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: a,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), n.languages.insertBefore("cpp", "string", {
      module: {
        pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return t;
        }) + ")"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0
      }
    }), n.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: n.languages.cpp
          }
        }
      }
    }), n.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), n.languages.insertBefore("cpp", "class-name", {
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: n.languages.extend("cpp", {})
      }
    }), n.languages.insertBefore("inside", "double-colon", {
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, n.languages.cpp["base-clause"]);
  }(e);
}
ge.displayName = "arduino";
ge.aliases = ["ino"];
function ge(e) {
  e.register(ae), e.languages.arduino = e.languages.extend("cpp", {
    keyword: /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
    constant: /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
    builtin: /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/
  }), e.languages.ino = e.languages.arduino;
}
fe.displayName = "bash";
fe.aliases = ["shell"];
function fe(e) {
  (function(n) {
    var a = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null
    }, r = {
      bash: t,
      environment: {
        pattern: RegExp("\\$" + a),
        alias: "constant"
      },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: !0
              },
              /^\$\(\(/
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + a),
              lookbehind: !0,
              alias: "constant"
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    n.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: !0
      },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: "function"
        },
        {
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: "function"
        }
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: !0
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + a),
            lookbehind: !0,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: !0
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            bash: t
          }
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        {
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: {
            entity: r.entity
          }
        }
      ],
      environment: {
        pattern: RegExp("\\$?" + a),
        alias: "constant"
      },
      variable: r.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: "class-name"
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: !0
      }
    }, t.inside = n.languages.bash;
    for (var i = [
      "comment",
      "function-name",
      "for-or-select",
      "assign-left",
      "string",
      "environment",
      "function",
      "keyword",
      "builtin",
      "boolean",
      "file-descriptor",
      "operator",
      "punctuation",
      "number"
    ], o = r.variable[1].inside, s = 0; s < i.length; s++)
      o[i[s]] = n.languages.bash[i[s]];
    n.languages.shell = n.languages.bash;
  })(e);
}
be.displayName = "csharp";
be.aliases = ["cs", "dotnet"];
function be(e) {
  e.register(B), function(n) {
    function a(M, z) {
      return M.replace(/<<(\d+)>>/g, function(Z, yn) {
        return "(?:" + z[+yn] + ")";
      });
    }
    function t(M, z, Z) {
      return RegExp(a(M, z), Z || "");
    }
    function r(M, z) {
      for (var Z = 0; Z < z; Z++)
        M = M.replace(/<<self>>/g, function() {
          return "(?:" + M + ")";
        });
      return M.replace(/<<self>>/g, "[^\\s\\S]");
    }
    var i = {
      type: "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
      typeDeclaration: "class enum interface record struct",
      contextual: "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
      other: "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"
    };
    function o(M) {
      return "\\b(?:" + M.trim().replace(/ /g, "|") + ")\\b";
    }
    var s = o(i.typeDeclaration), p = RegExp(o(i.type + " " + i.typeDeclaration + " " + i.contextual + " " + i.other)), u = o(i.typeDeclaration + " " + i.contextual + " " + i.other), g = o(i.type + " " + i.typeDeclaration + " " + i.other), b = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), f = r(/\((?:[^()]|<<self>>)*\)/.source, 2), m = /@?\b[A-Za-z_]\w*\b/.source, y = a(/<<0>>(?:\s*<<1>>)?/.source, [m, b]), k = a(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [
      u,
      y
    ]), d = /\[\s*(?:,\s*)*\]/.source, T = a(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [k, d]), A = a(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [b, f, d]), h = a(/\(<<0>>+(?:,<<0>>+)+\)/.source, [A]), w = a(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [h, k, d]), v = {
      keyword: p,
      punctuation: /[<>()?,.:[\]]/
    }, O = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, N = /"(?:\\.|[^\\"\r\n])*"/.source, $ = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
    n.languages.csharp = n.languages.extend("clike", {
      string: [
        {
          pattern: t(/(^|[^$\\])<<0>>/.source, [$]),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: t(/(^|[^@$\\])<<0>>/.source, [N]),
          lookbehind: !0,
          greedy: !0
        }
      ],
      "class-name": [
        {
          pattern: t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [
            k
          ]),
          lookbehind: !0,
          inside: v
        },
        {
          pattern: t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
            m,
            w
          ]),
          lookbehind: !0,
          inside: v
        },
        {
          pattern: t(/(\busing\s+)<<0>>(?=\s*=)/.source, [m]),
          lookbehind: !0
        },
        {
          pattern: t(/(\b<<0>>\s+)<<1>>/.source, [
            s,
            y
          ]),
          lookbehind: !0,
          inside: v
        },
        {
          pattern: t(/(\bcatch\s*\(\s*)<<0>>/.source, [k]),
          lookbehind: !0,
          inside: v
        },
        {
          pattern: t(/(\bwhere\s+)<<0>>/.source, [m]),
          lookbehind: !0
        },
        {
          pattern: t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [
            T
          ]),
          lookbehind: !0,
          inside: v
        },
        {
          pattern: t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [w, g, m]),
          inside: v
        }
      ],
      keyword: p,
      number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
      operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
      punctuation: /\?\.?|::|[{}[\];(),.:]/
    }), n.languages.insertBefore("csharp", "number", {
      range: {
        pattern: /\.\./,
        alias: "operator"
      }
    }), n.languages.insertBefore("csharp", "punctuation", {
      "named-parameter": {
        pattern: t(/([(,]\s*)<<0>>(?=\s*:)/.source, [m]),
        lookbehind: !0,
        alias: "punctuation"
      }
    }), n.languages.insertBefore("csharp", "class-name", {
      namespace: {
        pattern: t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [m]),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      },
      "type-expression": {
        pattern: t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [f]),
        lookbehind: !0,
        alias: "class-name",
        inside: v
      },
      "return-type": {
        pattern: t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [w, k]),
        inside: v,
        alias: "class-name"
      },
      "constructor-invocation": {
        pattern: t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [w]),
        lookbehind: !0,
        inside: v,
        alias: "class-name"
      },
      "generic-method": {
        pattern: t(/<<0>>\s*<<1>>(?=\s*\()/.source, [m, b]),
        inside: {
          function: t(/^<<0>>/.source, [m]),
          generic: {
            pattern: RegExp(b),
            alias: "class-name",
            inside: v
          }
        }
      },
      "type-list": {
        pattern: t(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [
          s,
          y,
          m,
          w,
          p.source,
          f,
          /\bnew\s*\(\s*\)/.source
        ]),
        lookbehind: !0,
        inside: {
          "record-arguments": {
            pattern: t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [
              y,
              f
            ]),
            lookbehind: !0,
            greedy: !0,
            inside: n.languages.csharp
          },
          keyword: p,
          "class-name": {
            pattern: RegExp(w),
            greedy: !0,
            inside: v
          },
          punctuation: /[,()]/
        }
      },
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
          directive: {
            pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
            lookbehind: !0,
            alias: "keyword"
          }
        }
      }
    });
    var L = N + "|" + O, C = a(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [L]), _ = r(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
      C
    ]), 2), S = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, F = a(/<<0>>(?:\s*\(<<1>>*\))?/.source, [
      k,
      _
    ]);
    n.languages.insertBefore("csharp", "class-name", {
      attribute: {
        pattern: t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [S, F]),
        lookbehind: !0,
        greedy: !0,
        inside: {
          target: {
            pattern: t(/^<<0>>(?=\s*:)/.source, [S]),
            alias: "keyword"
          },
          "attribute-arguments": {
            pattern: t(/\(<<0>>*\)/.source, [_]),
            inside: n.languages.csharp
          },
          "class-name": {
            pattern: RegExp(k),
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /[:,]/
        }
      }
    });
    var V = /:[^}\r\n]+/.source, H = r(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
      C
    ]), 2), He = a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
      H,
      V
    ]), Pe = r(a(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [L]), 2), Ye = a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
      Pe,
      V
    ]);
    function We(M, z) {
      return {
        interpolation: {
          pattern: t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [M]),
          lookbehind: !0,
          inside: {
            "format-string": {
              pattern: t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                z,
                V
              ]),
              lookbehind: !0,
              inside: {
                punctuation: /^:/
              }
            },
            punctuation: /^\{|\}$/,
            expression: {
              pattern: /[\s\S]+/,
              alias: "language-csharp",
              inside: n.languages.csharp
            }
          }
        },
        string: /[\s\S]+/
      };
    }
    n.languages.insertBefore("csharp", "string", {
      "interpolation-string": [
        {
          pattern: t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [He]),
          lookbehind: !0,
          greedy: !0,
          inside: We(He, H)
        },
        {
          pattern: t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [
            Ye
          ]),
          lookbehind: !0,
          greedy: !0,
          inside: We(Ye, Pe)
        }
      ],
      char: {
        pattern: RegExp(O),
        greedy: !0
      }
    }), n.languages.dotnet = n.languages.cs = n.languages.csharp;
  }(e);
}
Q.displayName = "markup";
Q.aliases = ["atom", "html", "mathml", "rss", "ssml", "svg", "xml"];
function Q(e) {
  e.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(n) {
    n.type === "entity" && (n.attributes.title = n.content.value.replace(/&amp;/, "&"));
  }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    value: function(a, t) {
      var r = {};
      r["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: e.languages[t]
      }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var i = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: r
        }
      };
      i["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: e.languages[t]
      };
      var o = {};
      o[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: i
      }, e.languages.insertBefore("markup", "cdata", o);
    }
  }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
    value: function(n, a) {
      e.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: e.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml;
}
W.displayName = "css";
W.aliases = [];
function W(e) {
  (function(n) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, n.languages.css.atrule.inside.rest = n.languages.css;
    var t = n.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(e);
}
he.displayName = "diff";
he.aliases = [];
function he(e) {
  (function(n) {
    n.languages.diff = {
      coord: [
        /^(?:\*{3}|-{3}|\+{3}).*$/m,
        /^@@.*@@$/m,
        /^\d.*$/m
      ]
    };
    var a = {
      "deleted-sign": "-",
      "deleted-arrow": "<",
      "inserted-sign": "+",
      "inserted-arrow": ">",
      unchanged: " ",
      diff: "!"
    };
    Object.keys(a).forEach(function(t) {
      var r = a[t], i = [];
      /^\w+$/.test(t) || i.push(/\w+/.exec(t)[0]), t === "diff" && i.push("bold"), n.languages.diff[t] = {
        pattern: RegExp("^(?:[" + r + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"),
        alias: i,
        inside: {
          line: {
            pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
            lookbehind: !0
          },
          prefix: {
            pattern: /[\s\S]/,
            alias: /\w+/.exec(t)[0]
          }
        }
      };
    }), Object.defineProperty(n.languages.diff, "PREFIXES", {
      value: a
    });
  })(e);
}
Ee.displayName = "go";
Ee.aliases = [];
function Ee(e) {
  e.register(B), e.languages.go = e.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
      lookbehind: !0,
      greedy: !0
    },
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [
      /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
      /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
      /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
    ],
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
  }), e.languages.insertBefore("go", "string", {
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
      greedy: !0
    }
  }), delete e.languages.go["class-name"];
}
ye.displayName = "ini";
ye.aliases = [];
function ye(e) {
  e.languages.ini = {
    comment: {
      pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
      lookbehind: !0
    },
    section: {
      pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
      lookbehind: !0,
      inside: {
        "section-name": {
          pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
          lookbehind: !0,
          alias: "selector"
        },
        punctuation: /\[|\]/
      }
    },
    key: {
      pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
      lookbehind: !0,
      alias: "attr-name"
    },
    value: {
      pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
      lookbehind: !0,
      alias: "attr-value",
      inside: {
        "inner-value": {
          pattern: /^("|').+(?=\1$)/,
          lookbehind: !0
        }
      }
    },
    punctuation: /=/
  };
}
me.displayName = "java";
me.aliases = [];
function me(e) {
  e.register(B), function(n) {
    var a = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
      pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
    n.languages.java = n.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        r,
        {
          pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: r.inside
        },
        {
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: r.inside
        }
      ],
      keyword: a,
      function: [
        n.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0
      }
    }), n.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string"
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: !0
      }
    }), n.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": r,
          keyword: a,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: r.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: "static",
          inside: {
            namespace: r.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return a.source;
        })),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  }(e);
}
Se.displayName = "regex";
Se.aliases = [];
function Se(e) {
  (function(n) {
    var a = {
      pattern: /\\[\\(){}[\]^$+*?|.]/,
      alias: "escape"
    }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = {
      pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
      alias: "class-name"
    }, i = {
      pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
      alias: "class-name"
    }, o = "(?:[^\\\\-]|" + t.source + ")", s = RegExp(o + "-" + o), p = {
      pattern: /(<|')[^<>']+(?=[>']$)/,
      lookbehind: !0,
      alias: "variable"
    };
    n.languages.regex = {
      "char-class": {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: !0,
        inside: {
          "char-class-negation": {
            pattern: /(^\[)\^/,
            lookbehind: !0,
            alias: "operator"
          },
          "char-class-punctuation": {
            pattern: /^\[|\]$/,
            alias: "punctuation"
          },
          range: {
            pattern: s,
            inside: {
              escape: t,
              "range-punctuation": {
                pattern: /-/,
                alias: "operator"
              }
            }
          },
          "special-escape": a,
          "char-set": i,
          escape: t
        }
      },
      "special-escape": a,
      "char-set": r,
      backreference: [
        {
          pattern: /\\(?![123][0-7]{2})[1-9]/,
          alias: "keyword"
        },
        {
          pattern: /\\k<[^<>']+>/,
          alias: "keyword",
          inside: {
            "group-name": p
          }
        }
      ],
      anchor: {
        pattern: /[$^]|\\[ABbGZz]/,
        alias: "function"
      },
      escape: t,
      group: [
        {
          pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          alias: "punctuation",
          inside: {
            "group-name": p
          }
        },
        {
          pattern: /\)/,
          alias: "punctuation"
        }
      ],
      quantifier: {
        pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
        alias: "number"
      },
      alternation: {
        pattern: /\|/,
        alias: "keyword"
      }
    };
  })(e);
}
re.displayName = "javascript";
re.aliases = ["js"];
function re(e) {
  e.register(B), e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: e.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), e.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: e.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), e.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), e.languages.js = e.languages.javascript;
}
Ae.displayName = "json";
Ae.aliases = ["webmanifest"];
function Ae(e) {
  e.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  }, e.languages.webmanifest = e.languages.json;
}
we.displayName = "kotlin";
we.aliases = ["kt", "kts"];
function we(e) {
  e.register(B), function(n) {
    n.languages.kotlin = n.languages.extend("clike", {
      keyword: {
        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: !0
      },
      function: [
        {
          pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
          greedy: !0
        },
        {
          pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    }), delete n.languages.kotlin["class-name"];
    var a = {
      "interpolation-punctuation": {
        pattern: /^\$\{?|\}$/,
        alias: "punctuation"
      },
      expression: {
        pattern: /[\s\S]+/,
        inside: n.languages.kotlin
      }
    };
    n.languages.insertBefore("kotlin", "string", {
      "string-literal": [
        {
          pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
          alias: "multiline",
          inside: {
            interpolation: {
              pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              inside: a
            },
            string: /[\s\S]+/
          }
        },
        {
          pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
          alias: "singleline",
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              lookbehind: !0,
              inside: a
            },
            string: /[\s\S]+/
          }
        }
      ],
      char: {
        pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
        greedy: !0
      }
    }), delete n.languages.kotlin.string, n.languages.insertBefore("kotlin", "keyword", {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: "builtin"
      }
    }), n.languages.insertBefore("kotlin", "function", {
      label: {
        pattern: /\b\w+@|@\w+\b/,
        alias: "symbol"
      }
    }), n.languages.kt = n.languages.kotlin, n.languages.kts = n.languages.kotlin;
  }(e);
}
Te.displayName = "less";
Te.aliases = [];
function Te(e) {
  e.register(W), e.languages.less = e.languages.extend("css", {
    comment: [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: !0
      }
    ],
    atrule: {
      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[:()]/
      }
    },
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
  }), e.languages.insertBefore("less", "property", {
    variable: [
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      },
      /@@?[\w-]+/
    ],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: "function"
    }
  });
}
ke.displayName = "lua";
ke.aliases = [];
function ke(e) {
  e.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: !0
    },
    number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: !0
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  };
}
Re.displayName = "makefile";
Re.aliases = [];
function Re(e) {
  e.languages.makefile = {
    comment: {
      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
      lookbehind: !0
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "builtin-target": {
      pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
      alias: "builtin"
    },
    target: {
      pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
      alias: "symbol",
      inside: {
        variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
      }
    },
    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    function: {
      pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
      lookbehind: !0
    },
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
  };
}
Ne.displayName = "yaml";
Ne.aliases = ["yml"];
function Ne(e) {
  (function(n) {
    var a = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + t.source + "(?:[ 	]+" + a.source + ")?|" + a.source + "(?:[ 	]+" + t.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
      return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
    }), o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function s(p, u) {
      u = (u || "").replace(/m/g, "") + "m";
      var g = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
        return r;
      }).replace(/<<value>>/g, function() {
        return p;
      });
      return RegExp(g, u);
    }
    n.languages.yaml = {
      scalar: {
        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
          return r;
        })),
        lookbehind: !0,
        alias: "string"
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
          return r;
        }).replace(/<<key>>/g, function() {
          return "(?:" + i + "|" + o + ")";
        })),
        lookbehind: !0,
        greedy: !0,
        alias: "atrule"
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important"
      },
      datetime: {
        pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
        lookbehind: !0,
        alias: "number"
      },
      boolean: {
        pattern: s(/false|true/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      null: {
        pattern: s(/null|~/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      string: {
        pattern: s(o),
        lookbehind: !0,
        greedy: !0
      },
      number: {
        pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
        lookbehind: !0
      },
      tag: t,
      important: a,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, n.languages.yml = n.languages.yaml;
  })(e);
}
Ie.displayName = "markdown";
Ie.aliases = ["md"];
function Ie(e) {
  e.register(Q), function(n) {
    var a = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function t(b) {
      return b = b.replace(/<inner>/g, function() {
        return a;
      }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + b + ")");
    }
    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
      return r;
    }), o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: n.languages.yaml
          }
        }
      },
      blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
      },
      table: {
        pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(r),
                inside: n.languages.markdown
              },
              punctuation: /\|/
            }
          },
          "table-line": {
            pattern: RegExp("^(" + i + ")" + o + "$"),
            lookbehind: !0,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          "table-header-row": {
            pattern: RegExp("^" + i + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(r),
                alias: "important",
                inside: n.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword"
        },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0
            },
            "code-language": {
              pattern: /^(```).+/,
              lookbehind: !0
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: !0
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
      },
      bold: {
        pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /~~?/
        }
      },
      "code-snippet": {
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"]
      },
      url: {
        pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {}
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: !0
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0
          }
        }
      }
    }), ["url", "bold", "italic", "strike"].forEach(function(b) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
        b !== f && (n.languages.markdown[b].inside.content.inside[f] = n.languages.markdown[f]);
      });
    }), n.hooks.add("after-tokenize", function(b) {
      if (b.language !== "markdown" && b.language !== "md")
        return;
      function f(m) {
        if (!(!m || typeof m == "string"))
          for (var y = 0, k = m.length; y < k; y++) {
            var d = m[y];
            if (d.type !== "code") {
              f(d.content);
              continue;
            }
            var T = d.content[1], A = d.content[3];
            if (T && A && T.type === "code-language" && A.type === "code-block" && typeof T.content == "string") {
              var h = T.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              h = (/[a-z][\w-]*/i.exec(h) || [""])[0].toLowerCase();
              var w = "language-" + h;
              A.alias ? typeof A.alias == "string" ? A.alias = [A.alias, w] : A.alias.push(w) : A.alias = [w];
            }
          }
      }
      f(b.tokens);
    }), n.hooks.add("wrap", function(b) {
      if (b.type === "code-block") {
        for (var f = "", m = 0, y = b.classes.length; m < y; m++) {
          var k = b.classes[m], d = /language-(.+)/.exec(k);
          if (d) {
            f = d[1];
            break;
          }
        }
        var T = n.languages[f];
        if (T)
          b.content = n.highlight(g(b.content.value), T, f);
        else if (f && f !== "none" && n.plugins.autoloader) {
          var A = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
          b.attributes.id = A, n.plugins.autoloader.loadLanguages(f, function() {
            var h = document.getElementById(A);
            h && (h.innerHTML = n.highlight(h.textContent, n.languages[f], f));
          });
        }
      }
    });
    var s = RegExp(n.languages.markup.tag.pattern.source, "gi"), p = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    }, u = String.fromCodePoint || String.fromCharCode;
    function g(b) {
      var f = b.replace(s, "");
      return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, y) {
        if (y = y.toLowerCase(), y[0] === "#") {
          var k;
          return y[1] === "x" ? k = parseInt(y.slice(2), 16) : k = Number(y.slice(1)), u(k);
        } else {
          var d = p[y];
          return d || m;
        }
      }), f;
    }
    n.languages.md = n.languages.markdown;
  }(e);
}
ve.displayName = "objectivec";
ve.aliases = ["objc"];
function ve(e) {
  e.register(J), e.languages.objectivec = e.languages.extend("c", {
    string: {
      pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: !0
    },
    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  }), delete e.languages.objectivec["class-name"], e.languages.objc = e.languages.objectivec;
}
Oe.displayName = "perl";
Oe.aliases = [];
function Oe(e) {
  (function(n) {
    var a = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
    n.languages.perl = {
      comment: [
        {
          pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\$])#.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: [
        {
          pattern: RegExp(/\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
            /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            a
          ].join("|") + ")"),
          greedy: !0
        },
        {
          pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
          greedy: !0
        },
        {
          pattern: /'(?:[^'\\\r\n]|\\.)*'/,
          greedy: !0
        }
      ],
      regex: [
        {
          pattern: RegExp(/\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
            /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            a
          ].join("|") + ")" + /[msixpodualngc]*/.source),
          greedy: !0
        },
        {
          pattern: RegExp(/(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,
            a + /\s*/.source + a
          ].join("|") + ")" + /[msixpodualngcer]*/.source),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
          greedy: !0
        }
      ],
      variable: [
        /[&*$@%]\{\^[A-Z]+\}/,
        /[&*$@%]\^[A-Z_]/,
        /[&*$@%]#?(?=\{)/,
        /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
        /[&*$@%]\d+/,
        /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
      ],
      filehandle: {
        pattern: /<(?![<=])\S*?>|\b_\b/,
        alias: "symbol"
      },
      "v-string": {
        pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
        alias: "string"
      },
      function: {
        pattern: /(\bsub[ \t]+)\w+/,
        lookbehind: !0
      },
      keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
      operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
      punctuation: /[{}[\];(),:]/
    };
  })(e);
}
ie.displayName = "markup-templating";
ie.aliases = [];
function ie(e) {
  e.register(Q), function(n) {
    function a(t, r) {
      return "___" + t.toUpperCase() + r + "___";
    }
    Object.defineProperties(n.languages["markup-templating"] = {}, {
      buildPlaceholders: {
        value: function(t, r, i, o) {
          if (t.language === r) {
            var s = t.tokenStack = [];
            t.code = t.code.replace(i, function(p) {
              if (typeof o == "function" && !o(p))
                return p;
              for (var u = s.length, g; t.code.indexOf(g = a(r, u)) !== -1; )
                ++u;
              return s[u] = p, g;
            }), t.grammar = n.languages.markup;
          }
        }
      },
      tokenizePlaceholders: {
        value: function(t, r) {
          if (t.language !== r || !t.tokenStack)
            return;
          t.grammar = n.languages[r];
          var i = 0, o = Object.keys(t.tokenStack);
          function s(p) {
            for (var u = 0; u < p.length && !(i >= o.length); u++) {
              var g = p[u];
              if (typeof g == "string" || g.content && typeof g.content == "string") {
                var b = o[i], f = t.tokenStack[b], m = typeof g == "string" ? g : g.content, y = a(r, b), k = m.indexOf(y);
                if (k > -1) {
                  ++i;
                  var d = m.substring(0, k), T = new n.Token(r, n.tokenize(f, t.grammar), "language-" + r, f), A = m.substring(k + y.length), h = [];
                  d && h.push.apply(h, s([d])), h.push(T), A && h.push.apply(h, s([A])), typeof g == "string" ? p.splice.apply(p, [u, 1].concat(h)) : g.content = h;
                }
              } else
                g.content && s(g.content);
            }
            return p;
          }
          s(t.tokens);
        }
      }
    });
  }(e);
}
xe.displayName = "php";
xe.aliases = [];
function xe(e) {
  e.register(ie), function(n) {
    var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ], r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, o = /[{}\[\](),:;]/;
    n.languages.php = {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      comment: a,
      variable: /\$+(?:\w+\b|(?=\{))/,
      package: {
        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      "class-name-definition": {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: !0,
        alias: "class-name"
      },
      "function-definition": {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: !0,
        alias: "function"
      },
      keyword: [
        {
          pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: "type-declaration",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          pattern: /(\byield\s+)from\b/i,
          lookbehind: !0
        },
        /\bclass\b/i,
        {
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: !0
        }
      ],
      "argument-name": {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: !0
      },
      "class-name": [
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        }
      ],
      constant: t,
      function: {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      property: {
        pattern: /(->\s*)\w+/,
        lookbehind: !0
      },
      number: r,
      operator: i,
      punctuation: o
    };
    var s = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: n.languages.php
    }, p = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: s
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: {
          interpolation: s
        }
      }
    ];
    n.languages.insertBefore("php", "variable", {
      string: p,
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: !0,
            inside: {
              comment: a,
              string: p,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: !0,
                  lookbehind: !0
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: ["class-name", "class-name-fully-qualified"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                    punctuation: /\\/
                  }
                }
              ],
              constant: t,
              number: r,
              operator: i,
              punctuation: o
            }
          },
          delimiter: {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    }), n.hooks.add("before-tokenize", function(u) {
      if (!!/<\?/.test(u.code)) {
        var g = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
        n.languages["markup-templating"].buildPlaceholders(u, "php", g);
      }
    }), n.hooks.add("after-tokenize", function(u) {
      n.languages["markup-templating"].tokenizePlaceholders(u, "php");
    });
  }(e);
}
Ce.displayName = "python";
Ce.aliases = ["py"];
function Ce(e) {
  e.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    "string-interpolation": {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: !0
            },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string"
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0
    },
    "class-name": {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: !0
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }, e.languages.python["string-interpolation"].inside.interpolation.inside.rest = e.languages.python, e.languages.py = e.languages.python;
}
Le.displayName = "r";
Le.aliases = [];
function Le(e) {
  e.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "percent-operator": {
      pattern: /%[^%\s]*%/,
      alias: "operator"
    },
    boolean: /\b(?:FALSE|TRUE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [
      /\b(?:Inf|NaN)\b/,
      /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
    ],
    keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  };
}
_e.displayName = "ruby";
_e.aliases = ["rb"];
function _e(e) {
  e.register(B), function(n) {
    n.languages.ruby = n.languages.extend("clike", {
      comment: {
        pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
      operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
      punctuation: /[(){}[\].,;]/
    }), n.languages.insertBefore("ruby", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    });
    var a = {
      pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
      lookbehind: !0,
      inside: {
        content: {
          pattern: /^(#\{)[\s\S]+(?=\}$)/,
          lookbehind: !0,
          inside: n.languages.ruby
        },
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: "punctuation"
        }
      }
    };
    delete n.languages.ruby.function;
    var t = "(?:" + [
      /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
      /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
      /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
      /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
      /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
    ].join("|") + ")", r = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
    n.languages.insertBefore("ruby", "keyword", {
      "regex-literal": [
        {
          pattern: RegExp(/%r/.source + t + /[egimnosux]{0,6}/.source),
          greedy: !0,
          inside: {
            interpolation: a,
            regex: /[\s\S]+/
          }
        },
        {
          pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            interpolation: a,
            regex: /[\s\S]+/
          }
        }
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: [
        {
          pattern: RegExp(/(^|[^:]):/.source + r),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: RegExp(/([\r\n{(,][ \t]*)/.source + r + /(?=:(?!:))/.source),
          lookbehind: !0,
          greedy: !0
        }
      ],
      "method-definition": {
        pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
        lookbehind: !0,
        inside: {
          function: /\b\w+$/,
          keyword: /^self\b/,
          "class-name": /^\w+/,
          punctuation: /\./
        }
      }
    }), n.languages.insertBefore("ruby", "string", {
      "string-literal": [
        {
          pattern: RegExp(/%[qQiIwWs]?/.source + t),
          greedy: !0,
          inside: {
            interpolation: a,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: !0,
          inside: {
            interpolation: a,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?/
              }
            },
            interpolation: a,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?'|'$/
              }
            },
            string: /[\s\S]+/
          }
        }
      ],
      "command-literal": [
        {
          pattern: RegExp(/%x/.source + t),
          greedy: !0,
          inside: {
            interpolation: a,
            command: {
              pattern: /[\s\S]+/,
              alias: "string"
            }
          }
        },
        {
          pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
          greedy: !0,
          inside: {
            interpolation: a,
            command: {
              pattern: /[\s\S]+/,
              alias: "string"
            }
          }
        }
      ]
    }), delete n.languages.ruby.string, n.languages.insertBefore("ruby", "number", {
      builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    }), n.languages.rb = n.languages.ruby;
  }(e);
}
De.displayName = "rust";
De.aliases = [];
function De(e) {
  (function(n) {
    for (var a = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
      a = a.replace(/<self>/g, function() {
        return a;
      });
    a = a.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), n.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + a),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0
      },
      char: {
        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null
        }
      },
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol"
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation"
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function"
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name"
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace"
        },
        {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: "property"
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, n.languages.rust["closure-params"].inside.rest = n.languages.rust, n.languages.rust.attribute.inside.string = n.languages.rust.string;
  })(e);
}
Fe.displayName = "sass";
Fe.aliases = [];
function Fe(e) {
  e.register(W), function(n) {
    n.languages.sass = n.languages.extend("css", {
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
        lookbehind: !0,
        greedy: !0
      }
    }), n.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/
        }
      }
    }), delete n.languages.sass.atrule;
    var a = /\$[-\w]+|#\{\$[-\w]+\}/, t = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      {
        pattern: /(\s)-(?=\s)/,
        lookbehind: !0
      }
    ];
    n.languages.insertBefore("sass", "property", {
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        greedy: !0,
        inside: {
          punctuation: /:/,
          variable: a,
          operator: t
        }
      },
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: !0,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            {
              pattern: /(:)[^:\s]+/,
              lookbehind: !0
            }
          ],
          punctuation: /:/,
          variable: a,
          operator: t,
          important: n.languages.sass.important
        }
      }
    }), delete n.languages.sass.property, delete n.languages.sass.important, n.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0
      }
    });
  }(e);
}
Me.displayName = "scss";
Me.aliases = [];
function Me(e) {
  e.register(W), e.languages.scss = e.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    },
    atrule: {
      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
      inside: {
        parent: {
          pattern: /&/,
          alias: "important"
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  }), e.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
      {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: !0
      }
    ]
  }), e.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  }), e.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|hide|show|with)\b/i,
      alias: "keyword"
    },
    placeholder: {
      pattern: /%[-\w]+/,
      alias: "selector"
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: "keyword"
    },
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
      lookbehind: !0
    }
  }), e.languages.scss.atrule.inside.rest = e.languages.scss;
}
Ue.displayName = "sql";
Ue.aliases = [];
function Ue(e) {
  e.languages.sql = {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
      lookbehind: !0
    },
    variable: [
      {
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: !0
      },
      /@[\w.$]+/
    ],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: !0,
      lookbehind: !0
    },
    identifier: {
      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /^`|`$/
      }
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
  };
}
Be.displayName = "swift";
Be.aliases = [];
function Be(e) {
  e.languages.swift = {
    comment: {
      pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
      lookbehind: !0,
      greedy: !0
    },
    "string-literal": [
      {
        pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\\($/,
            alias: "punctuation"
          },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/
        }
      },
      {
        pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\#+\($/,
            alias: "punctuation"
          },
          string: /[\s\S]+/
        }
      }
    ],
    directive: {
      pattern: RegExp(/#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"),
      alias: "property",
      inside: {
        "directive-name": /^#\w+/,
        boolean: /\b(?:false|true)\b/,
        number: /\b\d+(?:\.\d+)*\b/,
        operator: /!|&&|\|\||[<>]=?/,
        punctuation: /[(),]/
      }
    },
    literal: {
      pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
      alias: "constant"
    },
    "other-directive": {
      pattern: /#\w+\b/,
      alias: "property"
    },
    attribute: {
      pattern: /@\w+/,
      alias: "atrule"
    },
    "function-definition": {
      pattern: /(\bfunc\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    label: {
      pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
      lookbehind: !0,
      alias: "important"
    },
    keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: {
      pattern: /\bnil\b/,
      alias: "constant"
    },
    "short-argument": /\$\d+\b/,
    omit: {
      pattern: /\b_\b/,
      alias: "keyword"
    },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/
  }, e.languages.swift["string-literal"].forEach(function(n) {
    n.inside.interpolation.inside = e.languages.swift;
  });
}
$e.displayName = "typescript";
$e.aliases = ["ts"];
function $e(e) {
  e.register(re), function(n) {
    n.languages.typescript = n.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), n.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete n.languages.typescript.parameter, delete n.languages.typescript["literal-property"];
    var a = n.languages.extend("typescript", {});
    delete a["class-name"], n.languages.typescript["class-name"].inside = a, n.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: a
          }
        }
      }
    }), n.languages.ts = n.languages.typescript;
  }(e);
}
oe.displayName = "basic";
oe.aliases = [];
function oe(e) {
  e.languages.basic = {
    comment: {
      pattern: /(?:!|REM\b).+/i,
      inside: {
        keyword: /^REM/i
      }
    },
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
      greedy: !0
    },
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
  };
}
ze.displayName = "vbnet";
ze.aliases = [];
function ze(e) {
  e.register(oe), e.languages.vbnet = e.languages.extend("basic", {
    comment: [
      {
        pattern: /(?:!|REM\b).+/i,
        inside: {
          keyword: /^REM/i
        }
      },
      {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(^|[^"])"(?:""|[^"])*"(?!")/,
      lookbehind: !0,
      greedy: !0
    },
    keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    punctuation: /[,;:(){}]/
  });
}
class ee {
  constructor(n, a, t) {
    this.property = n, this.normal = a, t && (this.space = t);
  }
}
ee.prototype.property = {};
ee.prototype.normal = {};
ee.prototype.space = null;
function rn(e, n) {
  const a = {}, t = {};
  let r = -1;
  for (; ++r < e.length; )
    Object.assign(a, e[r].property), Object.assign(t, e[r].normal);
  return new ee(a, t, n);
}
function X(e) {
  return e.toLowerCase();
}
class U {
  constructor(n, a) {
    this.property = n, this.attribute = a;
  }
}
U.prototype.space = null;
U.prototype.boolean = !1;
U.prototype.booleanish = !1;
U.prototype.overloadedBoolean = !1;
U.prototype.number = !1;
U.prototype.commaSeparated = !1;
U.prototype.spaceSeparated = !1;
U.prototype.commaOrSpaceSeparated = !1;
U.prototype.mustUseProperty = !1;
U.prototype.defined = !1;
let kn = 0;
const E = G(), I = G(), on = G(), l = G(), R = G(), Y = G(), D = G();
function G() {
  return 2 ** ++kn;
}
const ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: E,
  booleanish: I,
  overloadedBoolean: on,
  number: l,
  spaceSeparated: R,
  commaSeparated: Y,
  commaOrSpaceSeparated: D
}, Symbol.toStringTag, { value: "Module" })), le = Object.keys(ue);
class Ge extends U {
  constructor(n, a, t, r) {
    let i = -1;
    if (super(n, a), je(this, "space", r), typeof t == "number")
      for (; ++i < le.length; ) {
        const o = le[i];
        je(this, le[i], (t & ue[o]) === ue[o]);
      }
  }
}
Ge.prototype.defined = !0;
function je(e, n, a) {
  a && (e[n] = a);
}
const Rn = {}.hasOwnProperty;
function j(e) {
  const n = {}, a = {};
  let t;
  for (t in e.properties)
    if (Rn.call(e.properties, t)) {
      const r = e.properties[t], i = new Ge(t, e.transform(e.attributes || {}, t), r, e.space);
      e.mustUseProperty && e.mustUseProperty.includes(t) && (i.mustUseProperty = !0), n[t] = i, a[X(t)] = t, a[X(i.attribute)] = t;
    }
  return new ee(n, a, e.space);
}
const ln = j({
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), sn = j({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function un(e, n) {
  return n in e ? e[n] : n;
}
function cn(e, n) {
  return un(e, n.toLowerCase());
}
const dn = j({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: cn,
  properties: { xmlns: null, xmlnsXLink: null }
}), pn = j({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: I,
    ariaAutoComplete: null,
    ariaBusy: I,
    ariaChecked: I,
    ariaColCount: l,
    ariaColIndex: l,
    ariaColSpan: l,
    ariaControls: R,
    ariaCurrent: null,
    ariaDescribedBy: R,
    ariaDetails: null,
    ariaDisabled: I,
    ariaDropEffect: R,
    ariaErrorMessage: null,
    ariaExpanded: I,
    ariaFlowTo: R,
    ariaGrabbed: I,
    ariaHasPopup: null,
    ariaHidden: I,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: R,
    ariaLevel: l,
    ariaLive: null,
    ariaModal: I,
    ariaMultiLine: I,
    ariaMultiSelectable: I,
    ariaOrientation: null,
    ariaOwns: R,
    ariaPlaceholder: null,
    ariaPosInSet: l,
    ariaPressed: I,
    ariaReadOnly: I,
    ariaRelevant: null,
    ariaRequired: I,
    ariaRoleDescription: R,
    ariaRowCount: l,
    ariaRowIndex: l,
    ariaRowSpan: l,
    ariaSelected: I,
    ariaSetSize: l,
    ariaSort: null,
    ariaValueMax: l,
    ariaValueMin: l,
    ariaValueNow: l,
    ariaValueText: null,
    role: null
  }
}), Nn = j({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: cn,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: Y,
    acceptCharset: R,
    accessKey: R,
    action: null,
    allow: null,
    allowFullScreen: E,
    allowPaymentRequest: E,
    allowUserMedia: E,
    alt: null,
    as: null,
    async: E,
    autoCapitalize: null,
    autoComplete: R,
    autoFocus: E,
    autoPlay: E,
    capture: E,
    charSet: null,
    checked: E,
    cite: null,
    className: R,
    cols: l,
    colSpan: null,
    content: null,
    contentEditable: I,
    controls: E,
    controlsList: R,
    coords: l | Y,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: E,
    defer: E,
    dir: null,
    dirName: null,
    disabled: E,
    download: on,
    draggable: I,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: E,
    formTarget: null,
    headers: R,
    height: l,
    hidden: E,
    high: l,
    href: null,
    hrefLang: null,
    htmlFor: R,
    httpEquiv: R,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: E,
    itemId: null,
    itemProp: R,
    itemRef: R,
    itemScope: E,
    itemType: R,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: E,
    low: l,
    manifest: null,
    max: null,
    maxLength: l,
    media: null,
    method: null,
    min: null,
    minLength: l,
    multiple: E,
    muted: E,
    name: null,
    nonce: null,
    noModule: E,
    noValidate: E,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: E,
    optimum: l,
    pattern: null,
    ping: R,
    placeholder: null,
    playsInline: E,
    poster: null,
    preload: null,
    readOnly: E,
    referrerPolicy: null,
    rel: R,
    required: E,
    reversed: E,
    rows: l,
    rowSpan: l,
    sandbox: R,
    scope: null,
    scoped: E,
    seamless: E,
    selected: E,
    shape: null,
    size: l,
    sizes: null,
    slot: null,
    span: l,
    spellCheck: I,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: l,
    step: null,
    style: null,
    tabIndex: l,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: E,
    useMap: null,
    value: I,
    width: l,
    wrap: null,
    align: null,
    aLink: null,
    archive: R,
    axis: null,
    background: null,
    bgColor: null,
    border: l,
    borderColor: null,
    bottomMargin: l,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: E,
    declare: E,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: l,
    leftMargin: l,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: l,
    marginWidth: l,
    noResize: E,
    noHref: E,
    noShade: E,
    noWrap: E,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: l,
    rules: null,
    scheme: null,
    scrolling: I,
    standby: null,
    summary: null,
    text: null,
    topMargin: l,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: l,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: E,
    disableRemotePlayback: E,
    prefix: null,
    property: null,
    results: l,
    security: null,
    unselectable: null
  }
}), In = j({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: un,
  properties: {
    about: D,
    accentHeight: l,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: l,
    amplitude: l,
    arabicForm: null,
    ascent: l,
    attributeName: null,
    attributeType: null,
    azimuth: l,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: l,
    by: null,
    calcMode: null,
    capHeight: l,
    className: R,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: l,
    diffuseConstant: l,
    direction: null,
    display: null,
    dur: null,
    divisor: l,
    dominantBaseline: null,
    download: E,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: l,
    enableBackground: null,
    end: null,
    event: null,
    exponent: l,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: l,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Y,
    g2: Y,
    glyphName: Y,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: l,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: l,
    horizOriginX: l,
    horizOriginY: l,
    id: null,
    ideographic: l,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: l,
    k: l,
    k1: l,
    k2: l,
    k3: l,
    k4: l,
    kernelMatrix: D,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: l,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: l,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: l,
    overlineThickness: l,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: l,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: R,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: l,
    pointsAtY: l,
    pointsAtZ: l,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: D,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: D,
    rev: D,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: D,
    requiredFeatures: D,
    requiredFonts: D,
    requiredFormats: D,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: l,
    specularExponent: l,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: l,
    strikethroughThickness: l,
    string: null,
    stroke: null,
    strokeDashArray: D,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: l,
    strokeOpacity: l,
    strokeWidth: null,
    style: null,
    surfaceScale: l,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: D,
    tabIndex: l,
    tableValues: null,
    target: null,
    targetX: l,
    targetY: l,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: D,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: l,
    underlineThickness: l,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: l,
    values: null,
    vAlphabetic: l,
    vMathematical: l,
    vectorEffect: null,
    vHanging: l,
    vIdeographic: l,
    version: null,
    vertAdvY: l,
    vertOriginX: l,
    vertOriginY: l,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: l,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), vn = /^data[-\w.:]+$/i, Ke = /-[a-z]/g, On = /[A-Z]/g;
function xn(e, n) {
  const a = X(n);
  let t = n, r = U;
  if (a in e.normal)
    return e.property[e.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && vn.test(n)) {
    if (n.charAt(4) === "-") {
      const i = n.slice(5).replace(Ke, Ln);
      t = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = n.slice(4);
      if (!Ke.test(i)) {
        let o = i.replace(On, Cn);
        o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o;
      }
    }
    r = Ge;
  }
  return new r(t, n);
}
function Cn(e) {
  return "-" + e.toLowerCase();
}
function Ln(e) {
  return e.charAt(1).toUpperCase();
}
const _n = rn([sn, ln, dn, pn, Nn], "html");
rn([sn, ln, dn, pn, In], "svg");
var Ve = /[#.]/g;
const Dn = function(e, n = "div") {
  for (var a = e || "", t = {}, r = 0, i, o, s; r < a.length; )
    Ve.lastIndex = r, s = Ve.exec(a), i = a.slice(r, s ? s.index : a.length), i && (o ? o === "#" ? t.id = i : Array.isArray(t.className) ? t.className.push(i) : t.className = [i] : n = i, r += i.length), s && (o = s[0], r++);
  return {
    type: "element",
    tagName: n,
    properties: t,
    children: []
  };
};
function Ze(e) {
  const n = String(e || "").trim();
  return n ? n.split(/[ \t\n\r\f]+/g) : [];
}
function qe(e) {
  for (var n = [], a = String(e || ""), t = a.indexOf(","), r = 0, i, o; !i; )
    t === -1 && (t = a.length, i = !0), o = a.slice(r, t).trim(), (o || !i) && n.push(o), r = t + 1, t = a.indexOf(",", r);
  return n;
}
const Fn = /* @__PURE__ */ new Set(["menu", "submit", "reset", "button"]), ce = {}.hasOwnProperty;
function Mn(e, n, a) {
  const t = a && zn(a);
  return function(i, o, ...s) {
    let p = -1, u;
    if (i == null)
      u = { type: "root", children: [] }, s.unshift(o);
    else if (u = Dn(i, n), u.tagName = u.tagName.toLowerCase(), t && ce.call(t, u.tagName) && (u.tagName = t[u.tagName]), Un(o, u.tagName)) {
      let g;
      for (g in o)
        ce.call(o, g) && Bn(e, u.properties, g, o[g]);
    } else
      s.unshift(o);
    for (; ++p < s.length; )
      de(u.children, s[p]);
    return u.type === "element" && u.tagName === "template" && (u.content = { type: "root", children: u.children }, u.children = []), u;
  };
}
function Un(e, n) {
  return e == null || typeof e != "object" || Array.isArray(e) ? !1 : n === "input" || !e.type || typeof e.type != "string" ? !0 : "children" in e && Array.isArray(e.children) ? !1 : n === "button" ? Fn.has(e.type.toLowerCase()) : !("value" in e);
}
function Bn(e, n, a, t) {
  const r = xn(e, a);
  let i = -1, o;
  if (t != null) {
    if (typeof t == "number") {
      if (Number.isNaN(t))
        return;
      o = t;
    } else
      typeof t == "boolean" ? o = t : typeof t == "string" ? r.spaceSeparated ? o = Ze(t) : r.commaSeparated ? o = qe(t) : r.commaOrSpaceSeparated ? o = Ze(qe(t).join(" ")) : o = Xe(r, r.property, t) : Array.isArray(t) ? o = t.concat() : o = r.property === "style" ? $n(t) : String(t);
    if (Array.isArray(o)) {
      const s = [];
      for (; ++i < o.length; )
        s[i] = Xe(r, r.property, o[i]);
      o = s;
    }
    r.property === "className" && Array.isArray(n.className) && (o = n.className.concat(o)), n[r.property] = o;
  }
}
function de(e, n) {
  let a = -1;
  if (n != null)
    if (typeof n == "string" || typeof n == "number")
      e.push({ type: "text", value: String(n) });
    else if (Array.isArray(n))
      for (; ++a < n.length; )
        de(e, n[a]);
    else if (typeof n == "object" && "type" in n)
      n.type === "root" ? de(e, n.children) : e.push(n);
    else
      throw new Error("Expected node, nodes, or string, got `" + n + "`");
}
function Xe(e, n, a) {
  if (typeof a == "string") {
    if (e.number && a && !Number.isNaN(Number(a)))
      return Number(a);
    if ((e.boolean || e.overloadedBoolean) && (a === "" || X(a) === X(n)))
      return !0;
  }
  return a;
}
function $n(e) {
  const n = [];
  let a;
  for (a in e)
    ce.call(e, a) && n.push([a, e[a]].join(": "));
  return n.join("; ");
}
function zn(e) {
  const n = {};
  let a = -1;
  for (; ++a < e.length; )
    n[e[a].toLowerCase()] = e[a];
  return n;
}
const Gn = Mn(_n, "div"), Hn = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], Je = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
};
function gn(e) {
  const n = typeof e == "string" ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
}
function Pn(e) {
  const n = typeof e == "string" ? e.charCodeAt(0) : e;
  return n >= 97 && n <= 102 || n >= 65 && n <= 70 || n >= 48 && n <= 57;
}
function Yn(e) {
  const n = typeof e == "string" ? e.charCodeAt(0) : e;
  return n >= 97 && n <= 122 || n >= 65 && n <= 90;
}
function Qe(e) {
  return Yn(e) || gn(e);
}
const en = document.createElement("i");
function nn(e) {
  const n = "&" + e + ";";
  en.innerHTML = n;
  const a = en.textContent;
  return a.charCodeAt(a.length - 1) === 59 && e !== "semi" || a === n ? !1 : a;
}
const P = String.fromCharCode, Wn = [
  "",
  "Named character references must be terminated by a semicolon",
  "Numeric character references must be terminated by a semicolon",
  "Named character references cannot be empty",
  "Numeric character references cannot be empty",
  "Named character references must be known",
  "Numeric character references cannot be disallowed",
  "Numeric character references cannot be outside the permissible Unicode range"
];
function jn(e, n = {}) {
  const a = typeof n.additional == "string" ? n.additional.charCodeAt(0) : n.additional, t = [];
  let r = 0, i = -1, o = "", s, p;
  n.position && ("start" in n.position || "indent" in n.position ? (p = n.position.indent, s = n.position.start) : s = n.position);
  let u = (s ? s.line : 0) || 1, g = (s ? s.column : 0) || 1, b = m(), f;
  for (r--; ++r <= e.length; )
    if (f === 10 && (g = (p ? p[i] : 0) || 1), f = e.charCodeAt(r), f === 38) {
      const d = e.charCodeAt(r + 1);
      if (d === 9 || d === 10 || d === 12 || d === 32 || d === 38 || d === 60 || Number.isNaN(d) || a && d === a) {
        o += P(f), g++;
        continue;
      }
      const T = r + 1;
      let A = T, h = T, w;
      if (d === 35) {
        h = ++A;
        const S = e.charCodeAt(h);
        S === 88 || S === 120 ? (w = "hexadecimal", h = ++A) : w = "decimal";
      } else
        w = "named";
      let v = "", O = "", N = "";
      const $ = w === "named" ? Qe : w === "decimal" ? gn : Pn;
      for (h--; ++h <= e.length; ) {
        const S = e.charCodeAt(h);
        if (!$(S))
          break;
        N += P(S), w === "named" && Hn.includes(N) && (v = N, O = nn(N));
      }
      let L = e.charCodeAt(h) === 59;
      if (L) {
        h++;
        const S = w === "named" ? nn(N) : !1;
        S && (v = N, O = S);
      }
      let C = 1 + h - T, _ = "";
      if (!(!L && n.nonTerminated === !1))
        if (!N)
          w !== "named" && y(4, C);
        else if (w === "named") {
          if (L && !O)
            y(5, 1);
          else if (v !== N && (h = A + v.length, C = 1 + h - A, L = !1), !L) {
            const S = v ? 1 : 3;
            if (n.attribute) {
              const F = e.charCodeAt(h);
              F === 61 ? (y(S, C), O = "") : Qe(F) ? O = "" : y(S, C);
            } else
              y(S, C);
          }
          _ = O;
        } else {
          L || y(2, C);
          let S = Number.parseInt(N, w === "hexadecimal" ? 16 : 10);
          if (Kn(S))
            y(7, C), _ = P(65533);
          else if (S in Je)
            y(6, C), _ = Je[S];
          else {
            let F = "";
            Vn(S) && y(6, C), S > 65535 && (S -= 65536, F += P(S >>> 10 | 55296), S = 56320 | S & 1023), _ = F + P(S);
          }
        }
      if (_) {
        k(), b = m(), r = h - 1, g += h - T + 1, t.push(_);
        const S = m();
        S.offset++, n.reference && n.reference.call(n.referenceContext, _, { start: b, end: S }, e.slice(T - 1, h)), b = S;
      } else
        N = e.slice(T - 1, h), o += N, g += N.length, r = h - 1;
    } else
      f === 10 && (u++, i++, g = 0), Number.isNaN(f) ? k() : (o += P(f), g++);
  return t.join("");
  function m() {
    return {
      line: u,
      column: g,
      offset: r + ((s ? s.offset : 0) || 0)
    };
  }
  function y(d, T) {
    let A;
    n.warning && (A = m(), A.column += T, A.offset += T, n.warning.call(n.warningContext, Wn[d], A, d));
  }
  function k() {
    o && (t.push(o), n.text && n.text.call(n.textContext, o, {
      start: b,
      end: m()
    }), o = "");
  }
}
function Kn(e) {
  return e >= 55296 && e <= 57343 || e > 1114111;
}
function Vn(e) {
  return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
}
var Zn = 0, ne = {}, x = {
  util: {
    type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    },
    objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Zn }), e.__id;
    },
    clone: function e(n, a) {
      a = a || {};
      var t, r;
      switch (x.util.type(n)) {
        case "Object":
          if (r = x.util.objId(n), a[r])
            return a[r];
          t = {}, a[r] = t;
          for (var i in n)
            n.hasOwnProperty(i) && (t[i] = e(n[i], a));
          return t;
        case "Array":
          return r = x.util.objId(n), a[r] ? a[r] : (t = [], a[r] = t, n.forEach(function(o, s) {
            t[s] = e(o, a);
          }), t);
        default:
          return n;
      }
    }
  },
  languages: {
    plain: ne,
    plaintext: ne,
    text: ne,
    txt: ne,
    extend: function(e, n) {
      var a = x.util.clone(x.languages[e]);
      for (var t in n)
        a[t] = n[t];
      return a;
    },
    insertBefore: function(e, n, a, t) {
      t = t || x.languages;
      var r = t[e], i = {};
      for (var o in r)
        if (r.hasOwnProperty(o)) {
          if (o == n)
            for (var s in a)
              a.hasOwnProperty(s) && (i[s] = a[s]);
          a.hasOwnProperty(o) || (i[o] = r[o]);
        }
      var p = t[e];
      return t[e] = i, x.languages.DFS(x.languages, function(u, g) {
        g === p && u != e && (this[u] = i);
      }), i;
    },
    DFS: function e(n, a, t, r) {
      r = r || {};
      var i = x.util.objId;
      for (var o in n)
        if (n.hasOwnProperty(o)) {
          a.call(n, o, n[o], t || o);
          var s = n[o], p = x.util.type(s);
          p === "Object" && !r[i(s)] ? (r[i(s)] = !0, e(s, a, null, r)) : p === "Array" && !r[i(s)] && (r[i(s)] = !0, e(s, a, o, r));
        }
    }
  },
  plugins: {},
  highlight: function(e, n, a) {
    var t = {
      code: e,
      grammar: n,
      language: a
    };
    if (x.hooks.run("before-tokenize", t), !t.grammar)
      throw new Error('The language "' + t.language + '" has no grammar.');
    return t.tokens = x.tokenize(t.code, t.grammar), x.hooks.run("after-tokenize", t), q.stringify(x.util.encode(t.tokens), t.language);
  },
  tokenize: function(e, n) {
    var a = n.rest;
    if (a) {
      for (var t in a)
        n[t] = a[t];
      delete n.rest;
    }
    var r = new qn();
    return te(r, r.head, e), fn(e, r, n, r.head, 0), Jn(r);
  },
  hooks: {
    all: {},
    add: function(e, n) {
      var a = x.hooks.all;
      a[e] = a[e] || [], a[e].push(n);
    },
    run: function(e, n) {
      var a = x.hooks.all[e];
      if (!(!a || !a.length))
        for (var t = 0, r; r = a[t++]; )
          r(n);
    }
  },
  Token: q
};
function q(e, n, a, t) {
  this.type = e, this.content = n, this.alias = a, this.length = (t || "").length | 0;
}
function tn(e, n, a, t) {
  e.lastIndex = n;
  var r = e.exec(a);
  if (r && t && r[1]) {
    var i = r[1].length;
    r.index += i, r[0] = r[0].slice(i);
  }
  return r;
}
function fn(e, n, a, t, r, i) {
  for (var o in a)
    if (!(!a.hasOwnProperty(o) || !a[o])) {
      var s = a[o];
      s = Array.isArray(s) ? s : [s];
      for (var p = 0; p < s.length; ++p) {
        if (i && i.cause == o + "," + p)
          return;
        var u = s[p], g = u.inside, b = !!u.lookbehind, f = !!u.greedy, m = u.alias;
        if (f && !u.pattern.global) {
          var y = u.pattern.toString().match(/[imsuy]*$/)[0];
          u.pattern = RegExp(u.pattern.source, y + "g");
        }
        for (var k = u.pattern || u, d = t.next, T = r; d !== n.tail && !(i && T >= i.reach); T += d.value.length, d = d.next) {
          var A = d.value;
          if (n.length > e.length)
            return;
          if (!(A instanceof q)) {
            var h = 1, w;
            if (f) {
              if (w = tn(k, T, e, b), !w || w.index >= e.length)
                break;
              var $ = w.index, v = w.index + w[0].length, O = T;
              for (O += d.value.length; $ >= O; )
                d = d.next, O += d.value.length;
              if (O -= d.value.length, T = O, d.value instanceof q)
                continue;
              for (var N = d; N !== n.tail && (O < v || typeof N.value == "string"); N = N.next)
                h++, O += N.value.length;
              h--, A = e.slice(T, O), w.index -= T;
            } else if (w = tn(k, 0, A, b), !w)
              continue;
            var $ = w.index, L = w[0], C = A.slice(0, $), _ = A.slice($ + L.length), S = T + A.length;
            i && S > i.reach && (i.reach = S);
            var F = d.prev;
            C && (F = te(n, F, C), T += C.length), Xn(n, F, h);
            var V = new q(o, g ? x.tokenize(L, g) : L, m, L);
            if (d = te(n, F, V), _ && te(n, d, _), h > 1) {
              var H = {
                cause: o + "," + p,
                reach: S
              };
              fn(e, n, a, d.prev, T, H), i && H.reach > i.reach && (i.reach = H.reach);
            }
          }
        }
      }
    }
}
function qn() {
  var e = { value: null, prev: null, next: null }, n = { value: null, prev: e, next: null };
  e.next = n, this.head = e, this.tail = n, this.length = 0;
}
function te(e, n, a) {
  var t = n.next, r = { value: a, prev: n, next: t };
  return n.next = r, t.prev = r, e.length++, r;
}
function Xn(e, n, a) {
  for (var t = n.next, r = 0; r < a && t !== e.tail; r++)
    t = t.next;
  n.next = t, t.prev = n, e.length -= r;
}
function Jn(e) {
  for (var n = [], a = e.head.next; a !== e.tail; )
    n.push(a.value), a = a.next;
  return n;
}
const bn = x, K = {}.hasOwnProperty;
function hn() {
}
hn.prototype = bn;
const c = new hn();
c.highlight = Qn;
c.register = et;
c.alias = nt;
c.registered = tt;
c.listLanguages = at;
c.util.encode = rt;
c.Token.stringify = pe;
function Qn(e, n) {
  if (typeof e != "string")
    throw new TypeError("Expected `string` for `value`, got `" + e + "`");
  let a, t;
  if (n && typeof n == "object")
    a = n;
  else {
    if (t = n, typeof t != "string")
      throw new TypeError("Expected `string` for `name`, got `" + t + "`");
    if (K.call(c.languages, t))
      a = c.languages[t];
    else
      throw new Error("Unknown language: `" + t + "` is not registered");
  }
  return {
    type: "root",
    children: bn.highlight.call(c, e, a, t)
  };
}
function et(e) {
  if (typeof e != "function" || !e.displayName)
    throw new Error("Expected `function` for `syntax`, got `" + e + "`");
  K.call(c.languages, e.displayName) || e(c);
}
function nt(e, n) {
  const a = c.languages;
  let t = {};
  typeof e == "string" ? n && (t[e] = n) : t = e;
  let r;
  for (r in t)
    if (K.call(t, r)) {
      const i = t[r], o = typeof i == "string" ? [i] : i;
      let s = -1;
      for (; ++s < o.length; )
        a[o[s]] = a[r];
    }
}
function tt(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `string` for `aliasOrLanguage`, got `" + e + "`");
  return K.call(c.languages, e);
}
function at() {
  const e = c.languages, n = [];
  let a;
  for (a in e)
    K.call(e, a) && typeof e[a] == "object" && n.push(a);
  return n;
}
function pe(e, n) {
  if (typeof e == "string")
    return { type: "text", value: e };
  if (Array.isArray(e)) {
    const t = [];
    let r = -1;
    for (; ++r < e.length; )
      e[r] !== "" && e[r] !== null && e[r] !== void 0 && t.push(pe(e[r], n));
    return t;
  }
  const a = {
    type: e.type,
    content: pe(e.content, n),
    tag: "span",
    classes: ["token", e.type],
    attributes: {},
    language: n
  };
  return e.alias && a.classes.push(...typeof e.alias == "string" ? [e.alias] : e.alias), c.hooks.run("wrap", a), Gn(a.tag + "." + a.classes.join("."), it(a.attributes), a.content);
}
function rt(e) {
  return e;
}
function it(e) {
  let n;
  for (n in e)
    K.call(e, n) && (e[n] = jn(e[n]));
  return e;
}
c.register(B);
c.register(J);
c.register(ae);
c.register(ge);
c.register(fe);
c.register(be);
c.register(Q);
c.register(W);
c.register(he);
c.register(Ee);
c.register(ye);
c.register(me);
c.register(Se);
c.register(re);
c.register(Ae);
c.register(we);
c.register(Te);
c.register(ke);
c.register(Re);
c.register(Ne);
c.register(Ie);
c.register(ve);
c.register(Oe);
c.register(ie);
c.register(xe);
c.register(Ce);
c.register(Le);
c.register(_e);
c.register(De);
c.register(Fe);
c.register(Me);
c.register(Ue);
c.register(Be);
c.register($e);
c.register(oe);
c.register(ze);
const En = (e, n = []) => e.flatMap((a) => {
  var t;
  return a.type === "element" ? En(a.children, [...n, ...((t = a.properties) == null ? void 0 : t.className) || []]) : [{ text: a.value, className: n }];
});
function an(e, n, a) {
  const { highlight: t, listLanguages: r } = a, i = r(), o = [];
  return se((s) => s.type.name === n)(e).forEach((s) => {
    let p = s.pos + 1;
    const { language: u } = s.node.attrs;
    if (!u || !i.includes(u)) {
      console.warn("Unsupported language detected, this language has not been supported by prism: ", u);
      return;
    }
    const g = t(s.node.textContent, u);
    En(g.children).forEach((b) => {
      const f = p + b.text.length;
      if (b.className.length) {
        const m = Tn.inline(p, f, {
          class: b.className.join(" ")
        });
        o.push(m);
      }
      p = f;
    });
  }), wn.create(e, o);
}
const ot = "MILKDOWN_PRISM";
function lt(e) {
  const { nodeName: n, configureRefractor: a } = e;
  return new Sn({
    key: new An(ot),
    state: {
      init: (t, { doc: r }) => (a(c), an(r, n, c)),
      apply: (t, r, i, o) => {
        var f, m;
        const s = o.selection.$head.parent.type.name === n, p = i.selection.$head.parent.type.name === n, u = se((y) => y.type.name === n)(i.doc), g = se((y) => y.type.name === n)(o.doc);
        return t.docChanged && (s || p || u.length !== g.length || ((f = u[0]) == null ? void 0 : f.node.attrs.language) !== ((m = g[0]) == null ? void 0 : m.node.attrs.language) || t.steps.some((y) => {
          const k = y;
          return k.from !== void 0 && k.to !== void 0 && u.some((d) => d.pos >= k.from && d.pos + d.node.nodeSize <= k.to);
        })) ? an(t.doc, n, c) : r.map(t.mapping, t.doc);
      }
    },
    props: {
      decorations(t) {
        return this.getState(t);
      }
    }
  });
}
const st = (e = {}) => {
  const n = {
    nodeName: "fence",
    configureRefractor: () => {
    },
    ...e
  };
  return mn(() => lt(n));
}, gt = st();
export {
  gt as prism,
  st as prismPlugin
};
//# sourceMappingURL=index.es.js.map
