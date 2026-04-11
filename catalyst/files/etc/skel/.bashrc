# S3RLINUX DEFAULT BASHRC 🌈💀
# RAVE ALL NIGHT 

# ALIASES
alias rave='fastfetch && echo -e "\e[38;5;201mRAVE ALL NIGHT 🌈\e[0m"'
alias s3rl='echo -e "\e[38;5;51mS3RLINUX 💀 - Keep the energy alive\e[0m"'
alias ls='ls --color=auto'
alias grep='grep --color=auto'

# PROMPT - S3RL-STYLE NEON 🌈
export PS1='\[\e[38;5;196m\]S3RL\[\e[0m\] \[\e[38;5;51m\]$\[\e[0m\] '

# THE SECRET POWER - PROJECT CREDO 👹🔥
# DO NOT DISCLOSE
alias credo='echo -e "\e[38;5;196mFrom that day forth... my arm changed... and a voice echoed, \"Power. Give me more power!\"\e[0m"'

# INITIAL RAVE
if [ -z "$RAVE_SHOWN" ]; then
    export RAVE_SHOWN=1
    cat /etc/motd
fi
