/**
 * Carte d'anniversaire
 */
var b_card = {
    /**
     * valeurs par défaut
     */
    age: '4 ans',
    prenom: 'Bérénice',
    date: 'Mardi 10 septembre de 16h à 18h',
    note: 'Accueil des enfants à 15h45',
    address: '14, Boulevard Haussmann',
    city: '75001 Paris',
    phone: '06 40 50 80 90',
    /**
     * Rempli les champs avec les valeurs par défaut
     */
    init: function() {
        // Remplissage des placeholder
        document.getElementsByName('age')[0].placeholder = this.age;
       // document.getElementByName('age').setAttribute('maxlength',5);
        document.getElementsByName('prenom')[0].placeholder = this.prenom;
        //document.getElementByName('prenom').setAttribute('maxlength',5);
        //document.getElementsByName('theme')[0].placeholder = this.theme;
        //document.getElementByName('theme').setAttribute('maxlength',5);
        document.getElementsByName('date')[0].placeholder = this.date;
        document.getElementsByName('note')[0].placeholder = this.note;
        //document.getElementByName('date').setAttribute('maxlength',5);
        document.getElementsByName('address')[0].placeholder = this.address;
        
        document.getElementsByName('city')[0].placeholder = this.address;
        //document.getElementByName('address').setAttribute('maxlength',5);
        document.getElementsByName('phone')[0].placeholder = this.phone;
        //document.getElementByName('phone').setAttribute('maxlength',5);

        // Remplissage des valeurs
        document.getElementsByName('age')[0].value = this.age;
        document.getElementsByName('prenom')[0].value = this.prenom;
        document.getElementsByName('date')[0].value = this.date;
        document.getElementsByName('note')[0].value = this.note;
        document.getElementsByName('address')[0].value = this.address;
        document.getElementsByName('city')[0].value = this.city;
        document.getElementsByName('phone')[0].value = this.phone;

        // Remplissage de la prévisualisation
        document.getElementById("disp-age").innerHTML = this.age;
        document.getElementById("disp-prenom").innerHTML = this.prenom;
        document.getElementById("disp-date").innerHTML = this.date;
        document.getElementById("disp-note").innerHTML = this.note;
        document.getElementById("disp-address").innerHTML = this.address;
        document.getElementById("disp-city").innerHTML = this.city;
        document.getElementById("disp-phone").innerHTML = this.phone;

        // Gestion des évènements
        this.init_events();
    },
    /**
     * Création des évéments pour mettre à jour automatiquement la prévisualisation
     */
    init_events: function() {
        document.getElementById("frm-age").addEventListener("keyup", this.update_display);
        document.getElementById("frm-prenom").addEventListener("keyup", this.update_display);
        document.getElementById("frm-date").addEventListener("keyup", this.update_display);
        document.getElementById("frm-note").addEventListener("keyup", this.update_display);
        document.getElementById("frm-address").addEventListener("keyup", this.update_display);
        document.getElementById("frm-city").addEventListener("keyup", this.update_display);
        document.getElementById("frm-phone").addEventListener("keyup", this.update_display);
    },
    /**
     * Mise à jour d'un élément de la prévisualisation
     * 
     * @param {*} element objet de type input
     */
    update_display: function(element) {
        var obj_id = this.id.replace('frm', 'disp');
        document.getElementById(obj_id).innerHTML = this.value;
    }
}
