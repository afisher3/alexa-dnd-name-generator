# alexa-dnd-name-generator

Cool project for learning no-interface UX. Alexa skill for generating dnd NPC names. Currently a WIP. Not functional.

Project Directory Structure
	src
		index.js (javascript logic)
	speechAssets
		IntentSchema.json (define the intents we'll use)
		SampleUtterances.txt (what are the things people will say to alexa?)

	

Load all the JS to the AWS Lambda (index.js)

Create the "Alexa Skill" through the Alexa portal
	https://developer.amazon.com/edw/home.html#/

Upload the intent schema
	*Remeber this where the utterance variables get defined (slots)
Upload the utterances file

