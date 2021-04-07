function fileRead(){
	return initialStateStatusToLookFor;
}

function fileWrite(){
}

const initialStateStatusToLookFor = "yes";

function checkInitialState(){
	if (fileRead() == initialStateStatusToLookFor){
		firstTimeSetup();
	} else loadSavedState();
}

function firstTimeSetup(){
	//first time setup
}

function loadSavedState(){
	fileRead(); //load previous state from data.txt
}