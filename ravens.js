/*
/////////////////////////////////
// Short-Form Raven's Matrices //
/////////////////////////////////

This is a 12-item short form of the
Raven's Advanced Progressive Matrices 
(Arthur & Day, 1994).It can be administered 
in 15-20 minutes and has similar psychometric 
properties to the full 36-item assessment.

The script can be set to exit after a 
certain amount of time has passed. 
(var specDuration). The script outputs 
two important variables.

1. ravens --> this is what should be 
pushed to the timeline in the main index
file (e.g., timeline.push(ravens);)

2. return_ravens_folder() --> this function
allows you to assign a variable to the 
images used in the task (for preloading).
For example:
var ravens_img = return_ravens_folder();

Stephen Van Hedger, May 2020
*/

/**************/
/** TIMELINE **/
/**************/

var timeline = []; //specify the jsPsych timeline to which all trials/blocks are pushed

var totalScore = 0; //for logging the total number of correct responses
var totalSeen = 0; //for logging the total number of items participants get to in the specified time frame
var specDuration = 20; //number of MINUTES you want participants to be able to spend on the task (recommendation of ~15-20)


/************************/
/** TIMELINE VARIABLES **/
/************************/

var matrixList = [
{name: 'RAPM-01', pattern: 'RAPM/1_k.png', option_01: 'RAPM/1_1.png', option_02: 'RAPM/1_2.png', option_03: 'RAPM/1_3.png', option_04: 'RAPM/1_4.png', option_05: 'RAPM/1_5.png', option_06: 'RAPM/1_6.png', option_07: 'RAPM/1_7.png', option_08: 'RAPM/1_8.png', correct:4},
{name: 'RAPM-02', pattern: 'RAPM/2_k.png', option_01: 'RAPM/2_1.png', option_02: 'RAPM/2_2.png', option_03: 'RAPM/2_3.png', option_04: 'RAPM/2_4.png', option_05: 'RAPM/2_5.png', option_06: 'RAPM/2_6.png', option_07: 'RAPM/2_7.png', option_08: 'RAPM/2_8.png', correct:3},
{name: 'RAPM-03', pattern: 'RAPM/3_k.png', option_01: 'RAPM/3_1.png', option_02: 'RAPM/3_2.png', option_03: 'RAPM/3_3.png', option_04: 'RAPM/3_4.png', option_05: 'RAPM/3_5.png', option_06: 'RAPM/3_6.png', option_07: 'RAPM/3_7.png', option_08: 'RAPM/3_8.png', correct:0},
{name: 'RAPM-04', pattern: 'RAPM/4_k.png', option_01: 'RAPM/4_1.png', option_02: 'RAPM/4_2.png', option_03: 'RAPM/4_3.png', option_04: 'RAPM/4_4.png', option_05: 'RAPM/4_5.png', option_06: 'RAPM/4_6.png', option_07: 'RAPM/4_7.png', option_08: 'RAPM/4_8.png', correct:4},
{name: 'RAPM-05', pattern: 'RAPM/5_k.png', option_01: 'RAPM/5_1.png', option_02: 'RAPM/5_2.png', option_03: 'RAPM/5_3.png', option_04: 'RAPM/5_4.png', option_05: 'RAPM/5_5.png', option_06: 'RAPM/5_6.png', option_07: 'RAPM/5_7.png', option_08: 'RAPM/5_8.png', correct:1},
{name: 'RAPM-06', pattern: 'RAPM/6_k.png', option_01: 'RAPM/6_1.png', option_02: 'RAPM/6_2.png', option_03: 'RAPM/6_3.png', option_04: 'RAPM/6_4.png', option_05: 'RAPM/6_5.png', option_06: 'RAPM/6_6.png', option_07: 'RAPM/6_7.png', option_08: 'RAPM/6_8.png', correct:6},
{name: 'RAPM-07', pattern: 'RAPM/7_k.png', option_01: 'RAPM/7_1.png', option_02: 'RAPM/7_2.png', option_03: 'RAPM/7_3.png', option_04: 'RAPM/7_4.png', option_05: 'RAPM/7_5.png', option_06: 'RAPM/7_6.png', option_07: 'RAPM/7_7.png', option_08: 'RAPM/7_8.png', correct:7},
{name: 'RAPM-08', pattern: 'RAPM/8_k.png', option_01: 'RAPM/8_1.png', option_02: 'RAPM/8_2.png', option_03: 'RAPM/8_3.png', option_04: 'RAPM/8_4.png', option_05: 'RAPM/8_5.png', option_06: 'RAPM/8_6.png', option_07: 'RAPM/8_7.png', option_08: 'RAPM/8_8.png', correct:5},
{name: 'RAPM-09', pattern: 'RAPM/9_k.png', option_01: 'RAPM/9_1.png', option_02: 'RAPM/9_2.png', option_03: 'RAPM/9_3.png', option_04: 'RAPM/9_4.png', option_05: 'RAPM/9_5.png', option_06: 'RAPM/9_6.png', option_07: 'RAPM/9_7.png', option_08: 'RAPM/9_8.png', correct:6},
{name: 'RAPM-10', pattern: 'RAPM/10_k.png', option_01: 'RAPM/10_1.png', option_02: 'RAPM/2_2.png', option_03: 'RAPM/10_3.png', option_04: 'RAPM/10_4.png', option_05: 'RAPM/10_5.png', option_06: 'RAPM/10_6.png', option_07: 'RAPM/10_7.png', option_08: 'RAPM/10_8.png', correct:4},
{name: 'RAPM-11', pattern: 'RAPM/11_k.png', option_01: 'RAPM/11_1.png', option_02: 'RAPM/2_2.png', option_03: 'RAPM/11_3.png', option_04: 'RAPM/11_4.png', option_05: 'RAPM/11_5.png', option_06: 'RAPM/11_6.png', option_07: 'RAPM/11_7.png', option_08: 'RAPM/11_8.png', correct:3},
{name: 'RAPM-12', pattern: 'RAPM/12_k.png', option_01: 'RAPM/12_1.png', option_02: 'RAPM/2_2.png', option_03: 'RAPM/12_3.png', option_04: 'RAPM/12_4.png', option_05: 'RAPM/12_5.png', option_06: 'RAPM/12_6.png', option_07: 'RAPM/12_7.png', option_08: 'RAPM/12_8.png', correct:2}
];

//preload the image files

var img_preload = [
'RAPM/11_8.png', 'RAPM/11_k.png', 'RAPM/12_1.png', 'RAPM/12_2.png', 	
'RAPM/12_3.png', 'RAPM/12_4.png', 'RAPM/12_5.png', 'RAPM/12_6.png', 	
'RAPM/12_7.png', 'RAPM/12_8.png', 'RAPM/12_k.png', 'RAPM/1_1.png', 	
'RAPM/1_2.png', 'RAPM/1_3.png', 'RAPM/1_4.png', 'RAPM/1_5.png', 	
'RAPM/1_6.png', 'RAPM/1_7.png', 'RAPM/1_8.png', 'RAPM/1_k.png', 	
'RAPM/2_1.png', 'RAPM/2_2.png', 'RAPM/2_3.png', 'RAPM/2_4.png', 	
'RAPM/2_5.png', 'RAPM/2_6.png', 'RAPM/2_7.png', 'RAPM/2_8.png', 	
'RAPM/2_k.png', 'RAPM/3_1.png', 'RAPM/3_2.png', 'RAPM/3_3.png', 	
'RAPM/3_4.png', 'RAPM/3_5.png', 'RAPM/3_6.png', 'RAPM/3_7.png', 	
'RAPM/3_8.png', 'RAPM/3_k.png', 'RAPM/4_1.png', 'RAPM/4_2.png', 	
'RAPM/4_3.png', 'RAPM/4_4.png', 'RAPM/4_5.png', 'RAPM/4_6.png', 	
'RAPM/4_7.png', 'RAPM/4_8.png', 'RAPM/4_k.png', 'RAPM/5_1.png', 	
'RAPM/5_2.png', 'RAPM/5_3.png', 'RAPM/5_4.png', 'RAPM/5_5.png', 	
'RAPM/5_6.png', 'RAPM/5_7.png', 'RAPM/5_8.png', 'RAPM/5_k.png', 	
'RAPM/6_1.png', 'RAPM/6_2.png', 'RAPM/6_3.png', 'RAPM/6_4.png', 	
'RAPM/6_5.png', 'RAPM/6_6.png', 'RAPM/6_7.png', 'RAPM/6_8.png', 	
'RAPM/6_k.png', 'RAPM/7_1.png', 'RAPM/7_2.png', 'RAPM/7_3.png', 	
'RAPM/7_4.png', 'RAPM/7_5.png', 'RAPM/7_6.png', 'RAPM/7_7.png', 	
'RAPM/7_8.png', 'RAPM/7_k.png', 'RAPM/8_1.png', 'RAPM/8_2.png', 	
'RAPM/8_3.png', 'RAPM/8_4.png', 'RAPM/8_5.png', 'RAPM/8_6.png', 	
'RAPM/8_7.png', 'RAPM/8_8.png', 'RAPM/8_k.png', 'RAPM/9_1.png', 	
'RAPM/9_2.png', 'RAPM/9_3.png', 'RAPM/9_4.png', 'RAPM/9_5.png', 	
'RAPM/9_6.png', 'RAPM/9_7.png', 'RAPM/9_8.png', 'RAPM/9_k.png', 	
'RAPM/10_1.png', 'RAPM/10_2.png', 'RAPM/10_3.png','RAPM/10_4.png', 	
'RAPM/10_5.png', 'RAPM/10_6.png', 'RAPM/10_7.png', 'RAPM/10_8.png', 	
'RAPM/10_k.png', 'RAPM/11_1.png', 'RAPM/11_2.png', 'RAPM/11_3.png', 	
'RAPM/11_4.png', 'RAPM/11_5.png', 'RAPM/11_6.png', 'RAPM/11_7.png'
];


/************************/
/** BASIC INSTRUCTIONS **/
/************************/

var rapm_instructions = {
	type: 'html-button-response',
	stimulus: '<p> Welcome to the experiment!</p>',
	choices: ['BEGIN']		  
}


/**************************/
/** MAIN RESPONSE SCREEN **/
/**************************/

var rapm_response = {
	type: 'ravens-matrix',
	stimulus: jsPsych.timelineVariable('pattern'),
	data: {item: jsPsych.timelineVariable('name'), correct_ans: jsPsych.timelineVariable('correct')},
	post_trial_gap: 250,
	choices: [
	jsPsych.timelineVariable('option_01'), 
	jsPsych.timelineVariable('option_02'),
	jsPsych.timelineVariable('option_03'),
	jsPsych.timelineVariable('option_04'),
	jsPsych.timelineVariable('option_05'),
	jsPsych.timelineVariable('option_06'),
	jsPsych.timelineVariable('option_07'),
	jsPsych.timelineVariable('option_08')
	],
	on_finish:function(data){
		//score the response
		if(data.button_pressed == data.correct_ans){
			var gotitright = 1;
			totalScore += 1;
		} else {
			var gotitright = 0;
		}
		
		 jsPsych.data.addDataToLastTrial({
			  designation: "RAPM",
			  correct: gotitright	
            });	
		
		totalSeen += 1;	//add to the total number of seen items
	}
};


var rapm_proc = {
	timeline: [rapm_response],
	timeline_variables: matrixList,
	//function to terminate this timeline after a specific duration
	on_start: function(){
		setTimeout(function(){
		jsPsych.endCurrentTimeline();
		}, (specDuration*60000));
	}
};



/*************/
/** WRAP-UP **/ 
/*************/

//final feedback screen
var rapm_goodbye = {
    type: "html-button-response",
    stimulus: "<p>This concludes the pattern completion task.</p><p>Thank you for your responses!</p>",
    choices: ['Exit']
    };


/******************/
/** MAIN OUTPUTS **/ 
/******************/

//This is the ultimate variable that you will push to the timeline in the main section
var ravens = {
	timeline: [rapm_instructions, rapm_proc, rapm_goodbye]
}	

//This function will allow you to assign the to-be-preloaded images to a variable name of your choice
function return_ravens_folder(){
	return img_preload;
}

