'use strict';

/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */

// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText
            }
        },
        shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse
    };
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'DnD NameKeeper';
    const speechOutput =
        'Hello there! ' +
        "If you're looking for the name of any characters in this land, you can try asking me.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText =
        'Try asking me for a name, like, ' + 'give me a male dwarf name.';
    const shouldEndSession = false;

    callback(
        sessionAttributes,
        buildSpeechletResponse(
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        )
    );
}

function handleSessionEndRequest(callback) {
    const cardTitle = 'Goodbye';
    const speechOutput = 'Fare thee well, traveler.';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;

    callback(
        {},
        buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession)
    );
}

function buildRandomName(gender, race) {
    console.log('gender:' + gender);
    console.log('race:' + race);

    //init arrays of names
    let humanMale = [
        'Anlow',
        'Arando',
        'Bram',
        'Cale',
        'Dalkon',
        'Daylen',
        'Dodd',
        'Dungarth',
        'Dyrk',
        'Eandro',
        'Falken',
        'Feck',
        'Fenton',
        'Gryphero',
        'Hagar',
        'Jeras',
        'Krynt',
        'Lavant',
        'Leyten',
        'Madian',
        'Malfier',
        'Markus',
        'Meklan',
        'Namen',
        'Navaren',
        'Nerle',
        'Nilus',
        'Ningyan',
        'Norris',
        'Quentin',
        'Semil',
        'Sevenson',
        'Steveren',
        'Talfen',
        'Tamond',
        'Taran',
        'Tavon',
        'Tegan',
        'Vanan',
        'Vincent'
    ];
    let humanFemale = [
        'Azura',
        'Brey',
        'Hallan',
        'Kasaki',
        'Lorelei',
        'Mirabel',
        'Pharana',
        'Remora',
        'Rosalyn',
        'Sachil',
        'Saidi',
        'Tanika',
        'Tura',
        'Tylsa',
        'Vencia',
        'Xandrilla'
    ];
    let humanSurname = [
        'Arkalis',
        'Armanci',
        'Bilger',
        'Blackstrand',
        'Brightwater',
        'Carnavon',
        'Caskajaro',
        'Coldshore',
        'Coyle',
        'Cresthill',
        'Cuttlescar',
        'Daargen',
        'Dalicarlia',
        'Danamark',
        'Donoghan',
        'Drumwind',
        'Dunhall',
        'Ereghast',
        'Falck',
        'Fallenbridge',
        'Faringray',
        'Fletcher',
        'Fryft',
        'Goldrudder',
        'Grantham',
        'Graylock',
        'Gullscream',
        'Hindergrass',
        'Iscalon',
        'Kreel',
        'Kroft',
        'Lamoth',
        'Leerstrom',
        'Lynchfield',
        'Moonridge',
        'Netheridge',
        'Oakenheart',
        'Pyncion',
        'Ratley',
        'Redraven',
        'Revenmar',
        'Roxley',
        'Sell',
        'Seratolva',
        'Shanks',
        'Shattermast',
        'Shaulfer',
        'Silvergraft',
        'Stavenger',
        'Stormchapel',
        'Strong',
        'Swiller',
        'Talandro',
        'Targana',
        'Towerfall',
        'Umbermoor',
        'Van Devries',
        'Van Gandt',
        'Van Hyden',
        'Varcona',
        'Varzand',
        'Voortham',
        'Vrye',
        'Webb',
        'Welfer',
        'Wilxes',
        'Wintermere',
        'Wygarthe',
        'Zatchet',
        'Zethergyll'
    ];

    let dwarfMale = [
        'Agaro',
        'Arnan',
        'Auxlan',
        'Avamir',
        'Baelnar',
        'Balfam',
        'Bariken',
        'Borkûl',
        'Darkûl',
        'Dolmen',
        'Dyrnar',
        'Erag',
        'Ezegan',
        'Ferrek',
        'Garmûl',
        'Glint',
        'Ghorvas',
        'Grimmalk',
        'Haeltar',
        'Halagmar',
        'Halzar',
        'Hlant',
        'Korlag',
        'Krag',
        'Krim',
        'Kurman',
        'Lurtrum',
        'Malagar',
        'Mardam',
        'Maulnar',
        'Melgar',
        'Morak',
        'Orobok',
        'Rogath',
        'Roken',
        'Rozag',
        'Sabakzar',
        'Sharak',
        'Smethykk',
        'Swargar',
        'Thorbalt',
        'Thorin',
        'Tredigar',
        'Vabûl',
        'Vistrum',
        'Wolvar'
    ];
    let dwarfFemale = [
        'Beyla',
        'Fenryl',
        'Grenenzel',
        'Krystolari',
        'Lokara',
        'Lurka',
        'Marnia',
        'Praxana',
        'Rokel',
        'Roksana',
        'Thurlfara',
        'Vauldra',
        'Veklani',
        'Vronwe',
        'Zebel'
    ];
    let dwarfSurname = [
        'Ambershard',
        'Barrelhelm',
        'Copperhearth',
        'Deepmiddens',
        'Drakantal',
        'Evermead',
        'Evermead',
        'Grimtor',
        'Hackshield',
        'Irongull',
        'Markolak',
        'Ramcrown',
        'Rockharvest',
        'Silvertarn',
        'Skandalor',
        'Zarkanan'
    ];

    let elfMale = [
        'Alarcion',
        'Alathar',
        'Ariandar',
        'Arromar',
        'Borel',
        'Bvachan',
        'Carydion',
        'Elgoth',
        'Farlien',
        'Ferel',
        'Gaerlan',
        'Iafalior',
        'Kaelthorn',
        'Laethan',
        'Leliar',
        'Leodor',
        'Lorak',
        'Lorifir',
        'Morian',
        'Oleran',
        'Rylef',
        'Savian',
        'Seylas',
        'Tevior',
        'Veyas'
    ];
    let elfFemale = [
        'Aryllan',
        'Atalya',
        'Ayrthwil',
        'Irva',
        'Lyfalia',
        'Ronefel',
        'Thirya',
        'Velene',
        'Venefiq',
        'Zereni'
    ];
    let elfSurname = [
        'Autumnloft',
        'Balefrost',
        'Briarfell',
        'Evenwind',
        'Graytrails',
        'Mooncairn',
        'Riverwall',
        'Stormwolf',
        'Summergale',
        'Sunshadow',
        'Woodenhawk'
    ];

    let halflingMale = [
        'Arthan',
        'Carvin',
        'Corby',
        'Cullen',
        'Egen',
        'Ernest',
        'Gedi',
        'Heron',
        'Jeryl',
        'Keffen',
        'Kylem',
        'Kynt',
        'Leskyn',
        'Neff',
        'Orne',
        'Quarrel',
        'Rabbit',
        'Rilkin',
        'Snakebait',
        'Tarfen',
        'Titch',
        'Tuck',
        'Whim'
    ];
    let halflingFemale = [
        'Caliope',
        'Emily',
        'Piper',
        'Rixi',
        'Sabretha',
        'Teg',
        'Tilly',
        'Toira',
        'Vexia',
        'Vil',
        'Vzani',
        'Zanthe',
        'Ziza'
    ];
    let halflingSurname = [
        'Angler',
        'Battlestone',
        'Blackwater',
        'Daggersharp',
        'Deepstrider',
        'Hollowpot',
        'Puddle',
        'Raftmite',
        'Skiprock',
        'Silverfin',
        'Tanglestrand',
        'Tricker',
        'Willowrush',
        'Yellowcrane'
    ];

    let generatedName = '';

    //do the thing
    if (gender.toUpperCase() == 'MALE' && race.toUpperCase() == 'HUMAN') {
        generatedName =
            humanMale[Math.floor(Math.random() * humanMale.length)] +
            ' ' +
            humanSurname[Math.floor(Math.random() * humanSurname.length)];
    } else if (
        gender.toUpperCase() == 'FEMALE' &&
        race.toUpperCase() == 'HUMAN'
    ) {
        generatedName =
            humanFemale[Math.floor(Math.random() * humanFemale.length)] +
            ' ' +
            humanSurname[Math.floor(Math.random() * humanSurname.length)];
    } else if (
        gender.toUpperCase() == 'MALE' &&
        race.toUpperCase() == 'DWARF'
    ) {
        generatedName =
            dwarfMale[Math.floor(Math.random() * dwarfMale.length)] +
            ' ' +
            dwarfSurname[Math.floor(Math.random() * dwarfSurname.length)];
    } else if (
        gender.toUpperCase() == 'FEMALE' &&
        race.toUpperCase() == 'DWARF'
    ) {
        generatedName =
            dwarfFemale[Math.floor(Math.random() * dwarfFemale.length)] +
            ' ' +
            dwarfSurname[Math.floor(Math.random() * dwarfSurname.length)];
    } else if (gender.toUpperCase() == 'MALE' && race.toUpperCase() == 'ELF') {
        generatedName =
            elfMale[Math.floor(Math.random() * elfMale.length)] +
            ' ' +
            elfSurname[Math.floor(Math.random() * elfSurname.length)];
    } else if (
        gender.toUpperCase() == 'FEMALE' &&
        race.toUpperCase() == 'ELF'
    ) {
        generatedName =
            elfFemale[Math.floor(Math.random() * elfFemale.length)] +
            ' ' +
            elfSurname[Math.floor(Math.random() * elfSurname.length)];
    } else if (
        gender.toUpperCase() == 'MALE' &&
        race.toUpperCase() == 'HALFLING'
    ) {
        generatedName =
            halflingMale[Math.floor(Math.random() * halflingMale.length)] +
            ' ' +
            halflingSurname[Math.floor(Math.random() * halflingSurname.length)];
    } else if (
        gender.toUpperCase() == 'FEMALE' &&
        race.toUpperCase() == 'HALFLING'
    ) {
        generatedName =
            halflingFemale[Math.floor(Math.random() * halflingFemale.length)] +
            ' ' +
            halflingSurname[Math.floor(Math.random() * halflingSurname.length)];
    } else {
        generatedName = 'the dark one';
    }

    return generatedName;
    //return race+' '+gender;
}

/**
 * Sets the color in the session and prepares the speech to reply to the user.
 */

function generateName(intent, session, callback) {
    const cardTitle = intent.name;

    let repromptText =
        "Lot's of strangers pass through the Inn. Ask for a name by giving me a race and a gender.";
    let sessionAttributes = {}; //probably dont need this
    const shouldEndSession = true;
    let speechOutput = '';

    let genderInput = intent.slots.Gender.value;
    let raceInput = intent.slots.Race.value;

    let generatedName = buildRandomName(genderInput, raceInput);

    speechOutput = generatedName;

    //speechOutput = genderInput+' '+raceInput;

    callback(
        sessionAttributes,
        buildSpeechletResponse(
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        )
    );
}

// --------------- Events -----------------------

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(
        `onSessionStarted requestId=${
            sessionStartedRequest.requestId
        }, sessionId=${session.sessionId}`
    );
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(
        `onLaunch requestId=${launchRequest.requestId}, sessionId=${
            session.sessionId
        }`
    );

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log(
        `onIntent requestId=${intentRequest.requestId}, sessionId=${
            session.sessionId
        }`
    );

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'GenerateNameIntent') {
        //setColorInSession(intent, session, callback);
        generateName(intent, session, callback);
    } else if (intentName === 'AMAZON.HelpIntent') {
        getWelcomeResponse(callback);
    } else if (
        intentName === 'AMAZON.StopIntent' ||
        intentName === 'AMAZON.CancelIntent'
    ) {
        handleSessionEndRequest(callback);
    } else {
        throw new Error('Invalid intent');
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(
        `onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${
            session.sessionId
        }`
    );
    // Add cleanup logic here
}

// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
        console.log(
            `event.session.application.applicationId=${
                event.session.application.applicationId
            }`
        );

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        /*
        if (event.session.application.applicationId !== 'amzn1.echo-sdk-ams.app.[unique-value-here]') {
             callback('Invalid Application ID');
        }
        */

        if (event.session.new) {
            onSessionStarted(
                { requestId: event.request.requestId },
                event.session
            );
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(
                event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(
                        null,
                        buildResponse(sessionAttributes, speechletResponse)
                    );
                }
            );
        } else if (event.request.type === 'IntentRequest') {
            onIntent(
                event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(
                        null,
                        buildResponse(sessionAttributes, speechletResponse)
                    );
                }
            );
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};
