window.onload = function() {
    document.getElementById("email").innerHTML = '<a href="mailto:' + 'contact' +
        '@' + 'hongwang' + '.' + 'me"' + 'target="_top">' + 'contact' + '@' +
        'hongwang' + '.' + 'me</a>';

    var contactform = document.getElementById('contact-form');
    contactform.setAttribute('action', '//formspree.io/' + 'hongwang9851' +
        '@' + 'gmail' + '.' + 'com');
}
