function nameInitial(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
}
module.exports = nameInitial;
