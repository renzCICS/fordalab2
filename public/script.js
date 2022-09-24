function capitalizeName(name) {
    const words = name.value.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    name.value = words.join(" ");
}