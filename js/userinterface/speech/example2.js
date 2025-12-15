window['speech_example2_options'] = {
    lang: 'de-DE', // Sprache des Computers
    startword: 'Computer', // Auf diesen Namen hört der Computer
    commands: {
        'de-DE': {
            'begrüße unsere gäste': {
                // Eine einfache Sprachausgabe
                speak: 'Hallo liebe Gäste. Willkommen im Informatiklabor für Software- und Webentwiklung. Hier wird gelehrt und geforscht. Ich mache dabei, was alle Computer machen: Ich rechne.'
            },
            'berechne 2 * 3': {
                // Auch eine einfache Sprachausgabe
                speak: '2 mal 3 macht 4 Widdewiddewitt und Drei macht Neune !!'
            },
            'berechne': {
                // Führe die Berechnung aus - Zuerst muss "berechne" gesagt werden, danach eine mathematische Anweisung
                execute: function (cmdwords, parameter) {
                    return 'Das Ergebnis ist: ' + eval(parameter);
                }
            },
            'warum machst du nie, was ich möchte?': {
                speak: 'Hey! Ich mache doch immer, was du programmiert hast! Also genau das, was du möchtest!'
            },
            'zeige deine programmierung': {
                execute: function () {
                    // Suche das Element in dem der Programmcode steht
                    let codeElem = document.querySelector('.speech_configuration2');
                    // Entferne die Eigenschaft "verstecken"
                    codeElem.classList.remove('swac_dontdisplay');
                    // Scrolle zur Anzeige
                    window.scrollTo({
                        top: codeElem.getBoundingClientRect().top + window.scrollY,
                        behavior: 'smooth'
                    });
                }
            },
            'zeige die karte': {
                // Ruft die Karte für iRON auf
                execute: function () {
                    window.open('https://scl.fh-bielefeld.de/SmartMonitoringGewaesser/sites/object/map.html', '_blank');
                }
            },
            'aktualisiere dich': {
                // Läd das Programm neu
                execute: function () {
                    // Aktuelle URL abrufen
                    let currentUrl = new URL(window.location.href);
                    // Neuen Parameter hinzufügen oder aktualisieren
                    currentUrl.searchParams.set('refreshed', 'true');
                    // Seite mit der aktualisierten URL neu laden
                    window.location.href = currentUrl.toString();
                }
            },

            // Hier ist Platz für eure Ideen
            'befehl': {
                // Auch eine einfache Sprachausgabe
                speak: 'Was er sagen soll'
            }
        }
    }
};