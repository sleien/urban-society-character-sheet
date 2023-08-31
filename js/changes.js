var LOCKED = false;

function lock(argument) {
    LOCKED = !LOCKED;
    if (LOCKED)
        $('#menu-options #lock').text('Locked');
    else
        $('#menu-options #lock').text('Unlocked');

    $('#menu-options #lock').toggleClass('locked');
    $('#menu-options #lock').toggleClass('unlocked');
}



function updateMod(att, score) {
    var value = '';
    switch (parseInt(score)) {
        case 1:
            value = '-5';
            break;
        case 2:
        case 3:
            value = '-4';
            break;
        case 4:
        case 5:
            value = '-3';
            break;
        case 6:
        case 7:
            value = '-2';
            break;
        case 8:
        case 9:
            value = '-1';
            break;
        case 10:
        case 11:
            value = '+0';
            break;
        case 12:
        case 13:
            value = '+1';
            break;
        case 14:
        case 15:
            value = '+2';
            break;
        case 16:
        case 17:
            value = '+3';
            break;
        case 18:
        case 19:
            value = '+4';
            break;
        case 20:
        case 21:
            value = '+5';
            break;
        case 22:
        case 23:
            value = '+6';
            break;
        case 24:
        case 25:
            value = '+7';
            break;
        case 26:
        case 27:
            value = '+8';
            break;
        case 28:
        case 29:
            value = '+9';
            break;
        case 30:
            value = '+10';
            break;
    }

    $('#attributes input[name="' + att + '-mod"]').val(value);
}

function updateSaves() {

    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;

    if ($('#saves #phy-save input[name="prof"]').prop("checked") == true) {
        var strProf = prof;
    } else {
        var strProf = 0;
    }
    var base = parseInt($('#attributes input[name="phy-mod"]').val()) || 0;
    var save = ((base + strProf) < 0 ? "" : "+") + (base + strProf);
    $('#saves input[name="phy-save"]').val(save);

    if ($('#saves #agi-save input[name="prof"]').prop("checked") == true) {
        var dexProf = prof;
    } else {
        var dexProf = 0;
    }
    var base = parseInt($('#attributes input[name="agi-mod"]').val()) || 0;
    var save = ((base + dexProf) < 0 ? "" : "+") + (base + dexProf);
    $('#saves input[name="agi-save"]').val(save);

    if ($('#saves #end-save input[name="prof"]').prop("checked") == true) {
        var conProf = prof;
    } else {
        var conProf = 0;
    }
    var base = parseInt($('#attributes input[name="end-mod"]').val()) || 0;
    var save = ((base + conProf) < 0 ? "" : "+") + (base + conProf);
    $('#saves input[name="end-save"]').val(save);

    if ($('#saves #exp-save input[name="prof"]').prop("checked") == true) {
        var intProf = prof;
    } else {
        var intProf = 0;
    }
    var base = parseInt($('#attributes input[name="exp-mod"]').val()) || 0;
    var save = ((base + intProf) < 0 ? "" : "+") + (base + intProf);
    $('#saves input[name="exp-save"]').val(save);

    if ($('#saves #ins-save input[name="prof"]').prop("checked") == true) {
        var wisProf = prof;
    } else {
        var wisProf = 0;
    }
    var base = parseInt($('#attributes input[name="ins-mod"]').val()) || 0;
    var save = ((base + wisProf) < 0 ? "" : "+") + (base + wisProf);
    $('#saves input[name="ins-save"]').val(save);

    if ($('#saves #inf-save input[name="prof"]').prop("checked") == true) {
        var chaProf = prof;
    } else {
        var chaProf = 0;
    }
    var base = parseInt($('#attributes input[name="inf-mod"]').val()) || 0;
    var save = ((base + chaProf) < 0 ? "" : "+") + (base + chaProf);
    $('#saves input[name="inf-save"]').val(save);
}

function updateSpells() {
    var att = $('#saves-skills select[name="spell-att"]').val();

    if (att == 'none') {
        $('#top-bar input[name="spell-dc"]').val('Na');
        $('#spell-info input[name="dc"]').val('Na');
        return;
    }

    var base = parseInt($('#attributes input[name="' + att + '-mod"]').val()) || 0;
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;

    //Update DC
    var dc = 8 + base + prof;
    $('#top-bar input[name="spell-dc"]').val(dc);
    $('#spell-info input[name="dc"]').val(dc);

    //Update Spell Bonus
    var bonus = base + prof;
    $('#spell-info input[name="bonus"]').val("+" + bonus);

    //Update Spell Attribute
    $('#spell-info input[name="att"]').val(att);
}

function updateStrSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="phy-mod"]').val()) || 0;

    if ($('#skills #athletics-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #athletics-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #athletics-skill input[type="text"]').val(skill);
}

function updateDexSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="agi-mod"]').val()) || 0;

    if ($('#skills #acrobatics-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #acrobatics-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #acrobatics-skill input[type="text"]').val(skill);

    if ($('#skills #sleight-hand-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #sleight-hand-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #sleight-hand-skill input[type="text"]').val(skill);

    if ($('#skills #stealth-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #stealth-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #stealth-skill input[type="text"]').val(skill);
}

function updateIntSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="exp-mod"]').val()) || 0;

    if ($('#skills #arcana-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #arcana-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #arcana-skill input[type="text"]').val(skill);

    if ($('#skills #history-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #history-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #history-skill input[type="text"]').val(skill);

    if ($('#skills #investigation-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #investigation-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #investigation-skill input[type="text"]').val(skill);

    if ($('#skills #religion-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #religion-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #religion-skill input[type="text"]').val(skill);

}

function updateWisSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="ins-mod"]').val()) || 0;

    if ($('#skills #animal-handling-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #animal-handling-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#skills #animal-handling-skill input[type="text"]').val(skill);

    if ($('#skills #insight-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #insight-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#skills #insight-skill input[type="text"]').val(skill);

    if ($('#skills #medicine-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #medicine-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#skills #medicine-skill input[type="text"]').val(skill);

    if ($('#skills #nature-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #nature-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #nature-skill input[type="text"]').val(skill);

    if ($('#skills #perception-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #perception-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#skills #perception-skill input[type="text"]').val(skill);

    if ($('#skills #survival-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #survival-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#skills #survival-skill input[type="text"]').val(skill);

}

function updateChaSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="inf-mod"]').val()) || 0;

    if ($('#skills #deception-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #deception-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #deception-skill input[type="text"]').val(skill);

    if ($('#skills #intimidation-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #intimidation-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #intimidation-skill input[type="text"]').val(skill);

    if ($('#skills #performance-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #performance-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #performance-skill input[type="text"]').val(skill);

    if ($('#skills #persuasion-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#skills #persuasion-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #persuasion-skill input[type="text"]').val(skill);

}


function updateStrMisc() {
    var base = parseInt($('#attributes input[name="phy-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="phy"]').val()) || 0;

    var standart = 3

    $('#encumberance input[name="base-encumberance"]').val(score * standart);
    $('#encumberance input[name="encumbered-encumberance"]').val(score * standart * 2);
    $('#encumberance input[name="h-encumbered-encumberance"]').val(score * standart * 3);
    $('#encumberance input[name="push-encumberance"]').val(score * standart * 5);

}

function updateDexMisc() {
    var base = parseInt($('#attributes input[name="agi-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="agi"]').val()) || 0;

}

function updateWisMisc() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="ins-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="ins"]').val()) || 0;

    if ($('#skills #perception-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #perception-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#top-bar input[name="passive-perception"]').val(10 + parseInt(skill));
}

function calculateTotalWeight(argument) {
    var total = 0;
    $('#equipment input[name="weight"]').each(function(argument) {
        total += parseFloat($(this).val()) || 0;
    });

    $('#equipment input[name="total-weight"]').val(total.toFixed(2));
}

function calculateTotalCurrency(argument) {
    var total = 0;
    var base = $('#equipment #currancy select[name="base"]').val();
    console.log(base)
    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        switch ($(this).attr("name")) {
            case 'exo':
                var exo = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('exo', base);
                total += exo * modifier;
                break;
            case 'laks':
                var laks = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('laks', base);
                total += laks * modifier;
                break;
            }
        });
        
    switch (base) {
        case 'c':
            total = total.toFixed(0);
            break;
        case 's':
            total = total.toFixed(3);
            break;
    }

    $('#equipment #currancy input[name="total"]').val(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1'"));
}

function cacluateCurrencyMod(coin, base) {
    switch (coin) {
        case 'exo':
            switch (base) {
                case 'c':
                    return 1;
                    break;
                case 's':
                    return 1 / 1000000;
                    break;
            }
            break;
        case 'laks':
            switch (base) {
                case 'c':
                    return 1000000;
                    break;
                case 's':
                    return 1;
                    break;
            }
            break;
    }
}

function updateSpellSlots(total) {
    var totalSlots = parseInt(total.val()) || 0;
    var number = total.attr('name').substring(-1);
    var slots = total.parent().parent().find('div#slots');
    slots.empty();

    for (var i = totalSlots - 1; i >= 0; i--) {
        slots.append('<input type="checkbox" name="slot-' + number + '">')
    }
}

$('document').ready(function(argument) {
    //Run when strength changes
    $('#attributes input[name="phy"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('phy', $('#attributes input[name="phy"]').val());
        updateStrSkills();
        updateStrMisc();
    });

    //Run when dexterity changes
    $('#attributes input[name="agi"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('agi', $('#attributes input[name="agi"]').val());
        updateDexSkills();
        updateDexMisc();
    });

    //Run when constitution changes
    $('#attributes input[name="end"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('end', $('#attributes input[name="end"]').val());
    });

    //Run when intelligence changes
    $('#attributes input[name="exp"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('exp', $('#attributes input[name="exp"]').val());
        updateIntSkills();
    });

    //Run when wisdom changes
    $('#attributes input[name="ins"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('ins', $('#attributes input[name="ins"]').val());
        updateWisSkills();
        updateWisMisc();
    });

    //Run when charisma changes
    $('#attributes input[name="inf"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('inf', $('#attributes input[name="inf"]').val());
        updateChaSkills();
    });

    //Run misc att changes
    $('#attributes input').on('input', function(argument) {
        if (LOCKED)
            return;

        updateSaves();
        updateSpells();
    });

    //Run when proficience changes
    $('#top-bar input[name="proficiency"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateStrSkills();
        updateStrMisc();
        updateDexSkills();
        updateDexMisc();
        updateIntSkills();
        updateWisSkills();
        updateWisMisc();
        updateChaSkills();
        updateSaves();
        updateSpells();
    });

    //Run save prof changes
    $('#saves input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateSaves();
        });
    });

    //Run skill prof/exp changes
    $('#skills input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateIntSkills();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
        });
    });

    $('#skills input[name="expr"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateIntSkills();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
        });
    });

    //Run misc changes
    $('#saves-skills select[name="spell-att"]').change(function(argument) {
        if (LOCKED)
            return;

        updateSpells();
    });

    //Run weight changes
    $('#equipment input[name="weight"]').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalWeight();
        });
    });

    //Run currency changes
    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalCurrency();
        });
    });

    $('#equipment #currancy select[name="base"]').change(function(argument) {
        if (LOCKED)
            return;

        calculateTotalCurrency();
    });

    //Update Spell Slots
    $('#spells #total-slots input').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            updateSpellSlots($(this));
        });
    });

})