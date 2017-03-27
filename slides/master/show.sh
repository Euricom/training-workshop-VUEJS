echo $1
if [ $# -eq 0 ]
then
    reveal-md ./vuejs-master.md --title 'VueJS-Master' --theme solarized --highlightTheme github-gist
else
    reveal-md ./vuejs-master.md --title 'VueJS-Master' --theme moon
fi
