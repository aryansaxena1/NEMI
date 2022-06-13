/*
/////////////////////////////////
// Short-Form Raven's Matrices //
/////////////////////////////////

This is a 12-item short form of the
Raven's Advanced Progressive Matrices.
It can be administered in 15-20 minutes
and has similar psychometric properties
to the full 36-item assessment.

The script can be set to exit after a 
certain amount of time has passed. 
*/

/**************/
/** TIMELINE **/
/**************/

var timeline = []; //specify the jsPsych timeline to which all trials/blocks are pushed

var totalScore = 0; //for logging the total number of correct responses
var totalSeen = 0; //for logging the total number of items participants get to in the specified time frame
var specDuration = 20; //number of MINUTES you want participants to be able to spend on the task (recommendation of ~15-20)

/************/
/** SET-UP **/
/************/

//pavlovia initialize
var pavlovia_init = {
			type: "pavlovia",
			command: "init"
		};
		
timeline.push(pavlovia_init); //comment out for offline testing

//participant id
var participantCode = jsPsych.randomization.randomID(8); //random alpha-numeric string
jsPsych.data.addProperties({subject: participantCode}); // add participant code to data

//fullscreen enter
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});


/************************/
/** TIMELINE VARIABLES **/
/************************/

/*
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

var audio_preload = ['audio/testPodcast.mp3','audio/audioOneBanjo.mp3','audio/audioTwoFearless.mp3','audio/audioThreeBatman.mp3'];
*/
var debrief_preload = ['images/debrief1.png'];
var ncsTest_preload = ['images/ncsTest.png'];

/************************/
/**       WELCOME      **/
/************************/

var welcome = {
	type: 'html-button-response',
	stimulus: '<h2><strong>Welcome to the Experiment!</h2><p>Thank you for participating in our study. <br>Please read the following instructions:</strong></p> <p>The study will start by asking you some demographic questions, followed by a questionnaire. You will then listen to 3 podcasts and after each podcast you will be asked to complete a questionnaire regarding your experience of the stories. You will then complete two additional questionnaires and end with a final task. <br><br> <b>Important Note:</b> Sometimes when you are directed to a questionnaire, the page may load in the middle of the questionnaire. <b>Please make sure you are always scrolling to the top on these questionnaire pages to carefully read the instructions</b> as there are several different questionnaires in this study, each with different scales, values and instructions.  <br><br>Please take this time to ensure you are using headphones and that your audio is set to a comfortable volume. Please also ensure there are no additional distractions, such as mobile phones and please do not engage in conversations with others during study participation.</p>',
	choices: ['BEGIN']		  
}
timeline.push(welcome); 


/************************/
/**   DEMOGRAPHICS     **/
/************************/

//                                        TRIAL DEMO 
var demograph2 = {
	type: 'survey-text-2',
    questions: [
        {prompt: 'Please indicate your gender:', placeholder: 'i.e. Male, Female, specify otherwise', required: true, name:'Gender'},
        {prompt: 'Please indicate your age:', placeholder: 'i.e. 24', required: true, name:'Age'},
        {prompt: 'Which hand do you write with:', placeholder: 'i.e. left, right or both', required: true, name:'Hand'},
        {prompt: 'Please indicate your gender:', placeholder: 'i.e. Male, Female, specify otherwise', required: true, name:'Gender'} //remember to add comma here
        //skipped education
        //{prompt: 'What is your first language?', placeholder: 'i.e. English', required: true, name:'FirstLang'},
    //    {prompt: 'What other languages do you know and please indicate your fluency as such (1-very fluent, 6-not fluent):', placeholder: 'i.e. 3-French', required: true, name:'SecondLang'},
      //  {prompt: 'Do you wear a hearing aid?', placeholder: 'i.e. yes or no', required: true, name:'HearingAid'},
    //    {prompt: 'Do you have ringing in your ears?', placeholder: 'i.e. never, sometimes, or always', required: true, name:'Ringing'},
      //  {prompt: 'Do you have a neurological illness that we should be aware of?', placeholder: 'i.e. Yes or No', required: true, name:'Neuro'},
        //{prompt: 'If you indicated "Yes" for neurological illness and feel comfortable sharing, please indicate:', name:'NeuroYes'},
    //    {prompt: 'Will your participation in the study be affected by any other health problems that we should be aware of?', placeholder: 'i.e. No or specify if Yes', required: true, name:'Health'},
      //  {prompt: 'How would you describe your musical skills/experience (please write a single number)', placeholder: 'i.e. 1-not skilled vs. 6-very skilled?', required: true, name:'Music'},
        //{prompt: 'Do you have experience with a musical instrument?', placeholder: 'i.e. yes or no', required: true, name:'Instrument'},
    //    {prompt: 'If you indicated "Yes" for experience with a musical instrument, how many years of experience? (please approximate and write a single number)', placeholder: 'i.e. 5', name:'InstrumentYes'},

    ]
}
timeline.push(demograph2); 





/*
var demo_form = {
    type: 'survey-html-form',
    preamble: '<p> Please enter your details </p>',
    html: '<div align=left>'+ 
        '<p>Please indicate your gender:<br>'+
        '<input type="radio" id="male" name="gender" value="male" required><label for="male"> Male </label><br>'+
        '<input type="radio" id="female" name="gender" value="female" required><label for="female"> Female </label><br>'+
        '<input type="radio" id="other" name="gender" value="other" required><label for="other"> Other </label></p>'+
        
        '<p>If you indicated "other" for gender, you are welcome to provide your self-chosen gender identity here:<br>'+
        '<input type="text" id="otherGender" name="gender"></p>'+
        '<br>'+
        
        '<p>Please indicate your age:<br>'+
        '<input type="number" min=0 name="age" required/></p>'+
        '<br>'+

        '<p>Which hand do you write with (please check one):<br>'+
        '<input type="radio" id="left" name="handedness" value="left" required><label for="left"> Left </label><br>'+
        '<input type="radio" id="right" name="handedness" value="right" required><label for="right"> Right </label><br>'+
        '<input type="radio" id="both/ambidextrous" name="handedness" value="both" required><label for="left"> Both </label> </p>'+
        '<br>'+


        '<p>What level did you attain in school (please check one)<br>'+
        '<input type="radio" id="elementary" name="school" value="elementary" required><label for="elementary"> Elementary </label><br>'+
        '<input type="radio" id="lessG12" name="school" value="lessG12" required><label for="lessG12"> Less than Grade 12 </label><br>'+
        '<input type="radio" id="highschool" name="school" value="highschool" required><label for="highschool"> High school diploma </label><br>'+
        '<input type="radio" id="someuni" name="school" value="someuni" required><label for="someuni"> Some university undergraduate schooling </label><br>'+
        '<input type="radio" id="college2" name="school" value="college2" required><label for="college2"> College degree (2 years) </label><br>'+
        '<input type="radio" id="bachelors" name="school" value="bachelors" required><label for="bachelors"> Bachelors degree </label><br>'+
        '<input type="radio" id="postgrad" name="school" value="postgrad" required><label for="postgrad"> Postgraduate degree </label> <br>'+
        '<input type="radio" id="otherSchool" name="school"value="otherSchool" required><label for="otherSchool"> Other (please specify below) </label></p>'+

        '<p>If you indicated "Other" for school level, please specify below:<br>'+
        '<input type="text" id="otherSchoolList" name="school"></p>'+
        '<br>'+


        '<p>What is your first language:<br>'+
        '<input type="text" id="firstlang" name="lang" required><label for="firstlang"> (i.e. English) </label></p>'+

        '<p>What other languages do you know? <br> Please indicate degree of fluency for each (1-very fluent, 6-slightly fluent)<br>'+
        '<input type="text" id="otherlang" name="lang" ><label for="otherlang"> (i.e. 3-French) </label></p>'+
        '<br>'+
        
        '<p>Do you wear a hearing aid?<br>'+
        '<input type="radio" id="haNo" name="hearingAid" value="haNo" required><label for="haNo"> No </label><br>'+
        '<input type="radio" id="haYesLeft" name="hearingAid" value="haYesLeft" required><label for="haYesLeft"> Left </label> <br>'+
        '<input type="radio" id="haYesRight" name="hearingAid" value="haYesRight" required><label for="haYesRight"> Right </label><br>'+
        '<input type="radio" id="haYesBoth" name="hearingAid" value="haYesBoth" required><label for="haYesBoth"> Both </label> </p>'+
        '<br>'+
        
        '<p>Do you have ringing in your ears?<br>'+
        '<input type="radio" id="ringingNever" name="ringing" value="ringingNever" required><label for="ringingNever"> Never </label><br>'+
        '<input type="radio" id="ringingSometimes" name="ringing" value="ringingSometimes" required><label for="ringingSometimes"> Sometimes </label> <br>'+
        '<input type="radio" id="ringingAlways" name="ringing" value="ringingAlways" required><label for="ringingAlways"> Always </label> </p>'+
        '<br>'+


        '<p>Have you ever had any neurological diseases?<br>'+
        '<input type="radio" id="neuroNo" name="neuro" value="neuroNo" required><label for="neuroNo"> No </label>'+
        '<input type="radio" id="neuroYes" name="neuro" value="neuroYes" required><label for="neuroYes"> Yes </label><br>'+
        '<input type="text" id="neuroYesList" name="neuro" ><label for="neuroYesList"> (if yes, then please indicate here)</label></p>'+
        '<br>'+
        
        '<p>Will your participation in the study be affected by any other health problems that we should be aware of?<br>'+
        '<input type="radio" id="healthNo" name="health" value="healthNo" required><label for="healthNo"> No </label>'+
        '<input type="radio" id="healthYes" name="health" value="healthYes" required><label for="healthYes"> Yes </label><br>'+
        '<input type="text" id="healthYesList" name="health" ><label for="healthYesList"> (if yes, then please indicate here)</label></p>'+
        '<br>'+
        
        '<p>How would you describe your musical skills/experience (please write one number, 1-not skilled/experienced vs. 6-very skilled/experienced)?<br>'+
        '<input type="number" min="1" max="6" name="music" required/></p>'+
        '<br>'+
        
        '<p>Have you ever played a musical instrument?<br>'+
        '<input type="radio" id="instrumentNo" name="instrument" value="instrumentNo" required><label for="instrumentNo"> No </label>'+
        '<input type="radio" id="instrumentYes" name="instrument" value="instrumentYes" required><label for="instrumentYes"> Yes </label><br>'+
        '<input type="number" min="0" id="instrumentYesList" name="instrument" ><label for="instrumentYesList"> (if yes, then please indicate for how many years)</label></p>'+
        '<br>'+

        '<p>How would you describe your general hearing abilities (please check one number, 1-bad vs. 6-good)?<br>'+
        '<input type="number" min="1" max="6" name="hearingAbility" required/></p>'+
        '<br>'+
        
        '</div>',
    dataAsArray:true
}

timeline.push(demo_form);
*/
/************************/
/**  NEED4COGNITION    **/
/************************/
/*
var ncsTesting = {
    timeline
}
*/
/*
var scale_ncs = [1,2,3,4,5,6,7,8,9];


var ncsLikert = {
    type:'survey-likert',
    preamble:'<h2>Please complete the following questionnaire <b>Need for Cognition Scale</b></h2><br><p>Please indicate your responses according to the scale from: <br><br><br> <b>1 (very strong DISAGREEMENT)</b>, 2 (strong disagreement), 3 (moderate disagreement), 4 (slight disagreement), <br> <b>5 (NEITHER agreement or disagreement)</b>, <br> 6 (slight agreement), 7 (moderate agreement), 8 (strong agreement), <b>9 (very strong AGREEMENT)</b><br><br><br></p>',
    questions:[
        {prompt:"1. I really enjoy a task that involves coming up with new solutions to problems.",
            labels:scale_ncs,required:true},
        {prompt:"2. I believe that if I think hard enough, I will be able to achieve my goals in life.", 
            labels: scale_ncs, required:true},
        {prompt:"3. I am very optimistic about my mental abilities.", 
            labels: scale_ncs, required:true},
        {prompt:"4. I would prefer a task that is intellectual, difficult and important to one that is somewhat important but does not require much thought.", 
            labels: scale_ncs, required:true},
        {prompt:"5. I tend to set goals that can be accomplished only be expending considerable mental effort.", 
            labels: scale_ncs, required:true},
        {prompt:"6.	When something I read confuses me, I just put it down and forget it", 
            labels: scale_ncs, required:true},
        {prompt:"7.	I take pride in the products of my reasoning", 
            labels: scale_ncs, required:true},
        {prompt:"8. I don't usually think about problems that others have found to be difficult",
            labels: scale_ncs, required:true},
        {prompt:"9.	I am usually tempted to put more thought into a task than the job minimally requires",
            labels: scale_ncs, required:true},
        {prompt:"10. Learning new ways to think doesn't excite me very much",
            labels: scale_ncs, required:true},
        {prompt:"11. I am hesitant about making important decisions after thinking about them",
            labels: scale_ncs, required:true},
        {prompt:"12. I usually end up deliberating about issues even when they do not affect me personally",
            labels: scale_ncs, required:true},
        {prompt:"13. I prefer to just let things happen rather than try to understand why they turned out that way",
            labels: scale_ncs, required:true},
        {prompt:"14. I have difficulty thinking in new and unfamiliar situations",
            labels: scale_ncs, required:true},
        {prompt:"15. The idea of relying on thought to make my way to the top does not appeal to me",
            labels: scale_ncs, required:true},
        {prompt:"16. The notion of thinking abstractly is not appealing to me", 
            labels: scale_ncs, required:true},
        {prompt:"17. I am an intellectual", 
            labels: scale_ncs, required:true},
        {prompt:"18. I find it especially satisfying to complete an important task that required a lot of thinking and mental effort", 
            labels: scale_ncs, required:true},
        {prompt:"19. I only think as hard as I have to ", 
            labels: scale_ncs, required:true},
        {prompt:"20. I don't reason well under pressure", 
            labels: scale_ncs, required:true},
        {prompt:"21. I like tasks that require little thought once I've learned them", 
            labels: scale_ncs, required:true},
        {prompt:"22. I prefer to think about small, daily projects to long term ones", 
            labels: scale_ncs, required:true},
        {prompt:"23. I would rather do something that requires little thought than something that is sure to challenge my thinking abilities", 
            labels: scale_ncs, required:true},
        {prompt:"24. I find little satisfaction in deliberating hard and for long hours", 
            labels: scale_ncs, required:true},
        {prompt:"25. I think primarily because I have to ", 
            labels: scale_ncs, required:true},
        {prompt:"26. I more often talk with other people about the reasons for and possible solutions to international problems than about gossip or titbits of what famous people are doing", 
            labels: scale_ncs, required:true},
        {prompt:"27. These days, I see little change for performing well, even in 'intellectual' jobs, unless one knows the right people", 
            labels: scale_ncs, required:true},
        {prompt:"28. More often than not, more thinking just leads to more errors", 
            labels: scale_ncs, required:true},
        {prompt:"29. I don't like to have the responsibility of handling a situation that requires a lot of thinking", 
            labels: scale_ncs, required:true},
        {prompt:"30. I appreciate opportunities to discover the strengths and weaknesses of my own reasoning", 
            labels: scale_ncs, required:true},
        {prompt:"31. I find relief rather than satisfaction after completing a task that requires a lot of mental effort ", 
            labels: scale_ncs, required:true},
        {prompt:"32. Thinking is not my idea of fun", 
            labels: scale_ncs, required:true},
        {prompt:"33. I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something", 
            labels: scale_ncs, required:true},
        {prompt:"34. I don't like to be responsible for thinking of what I should be doing with my life", 
            labels: scale_ncs, required:true},
        {prompt:"35. I prefer watching educational to entertainment programs ", 
            labels: scale_ncs, required:true},
        {prompt:"36. I often succeed in solving difficult problems that I set out to solve ", 
            labels: scale_ncs, required:true},
        {prompt:"37. I think best when those around me are very intelligent", 
            labels: scale_ncs, required:true},
        {prompt:"38. I am not satisfied unless I am thinking", 
            labels: scale_ncs, required:true},
        {prompt:"39. I prefer my life to be filled with puzzles that I must solve ", 
            labels: scale_ncs, required:true},
        {prompt:"40. I would prefer simple to complex problems", 
            labels: scale_ncs, required:true},
        {prompt:"41. Simply knowing the answer rather than understanding the reasons for the answer to a problem is fine with me", 
            labels: scale_ncs, required:true},
        {prompt:"42. When I am figuring out a problem, what I see as the solutions to a problem is more important than what others believe or say is the solution", 
            labels: scale_ncs, required:true},
        {prompt:"43. It's enough for me that something gets the job done, I don't care how or why it works", 
            labels: scale_ncs, required:true},
        {prompt:"44. Ignorance is bliss", 
            labels: scale_ncs, required:true},
        {prompt:"45. I enjoy thinking about an issue even when the results of my thought will have no effect on the outcome of the issue", 
            labels: scale_ncs, required:true}
    ]
}
timeline.push(ncsLikert);
*/



/********************/
/**     PODCASTS   **/
/********************/

/*********************************************SAMPLE audio*/

/*
var nextTestPodcast = {
	type: 'html-button-response',
	stimulus: '<h2>Sample Audio</h2><p>Using your headphones, you will now listen to a sample audio.<br>Please take this opportunity to listen and make sure your volume is set to a comfortable level.<br>When you are ready please click <b>begin</b>.</p>',
	choices: ['BEGIN']		  
}
timeline.push(nextTestPodcast);

var testPodcast = {
    type:'audio-button-response',
    stimulus:'audio/testPodcast.mp3',
    prompt:'<h2>Sample Audio</h2> <p>The sample audio will play for 10 seconds. Once you are finished you will be automatically forwarded to the study podcasts. Please click <b>continue</b> to proceed once your audio is set to a comfortable level.</p>',
    choices:['CONTINUE'],
    trial_ends_after_audio:true
    
}
timeline.push(testPodcast); 

var nextRealPodcasts = {
	type: 'html-button-response',
	stimulus: '<h2>Podcast Audios</h2><p>You will now be asked to listen to a series of 3 podcasts. After each podcast, a questionnaire will be presented for you to complete.<br>Please take this opportunity to make sure your volume is turned up as the podcast will play as soon as you click <b>begin</b>.<br><br><br> <b>Once the podcast finishes, you will be automatically directed to the questionnaire related to the podcast.</b> When you are ready please click the button below and it will guide you directly to the first podcast audio.</p>',
	choices: ['BEGIN']		  
}
timeline.push(nextRealPodcasts);


/*********************************************AUDIO 1*/
/*
var realPodcastOne = {
    type:'audio-button-response',
    stimulus:'audio/audioOneBanjo.mp3',
    prompt:'<h2>Podcast Audio 1</h2><p>The first podcast audio will now play for 6 minutes. Once you are finished you will be automatically forwarded to the questionnaire for this podcast.</p> ',
    choices:[], //REMOVE FOR TESTING
    trial_ends_after_audio:true
    //replay:true
    
};
timeline.push(realPodcastOne); 


/***************************************nas1*/
/*
var scale_nas = [-3,-2,-1,0,1,2,3];

var nasLikertOne = {
    type:'survey-likert',
    preamble:'<h2>Please complete the following questionnaire for Podcast 1</h2><p>Please indicate your responses according to the scale from:</p><p> <b>-3</b> (totally <b>DISAGREE</b>) to <b>3</b> (totally <b>AGREE</b>)</p>',
    questions:[
        //attention
        {prompt:'When I finished the story I was surprised to see that time had gone by so fast.',
            labels:scale_nas,required:true},
        {prompt:"When I was listening to the story I was focused on what happened in the story.", 
            labels: scale_nas, required:true},
        {prompt:"I felt absorbed in the story.", 
            labels: scale_nas, required:true},
        {prompt:"The story gripped me in such a way that I could close myselff off for things that were happening around me.", 
            labels: scale_nas, required:true},
        {prompt:"I was listening in such a concentrated manner that I had forgotten the world around me.", 
            labels: scale_nas, required:true},
       
        //transportation 
        {prompt:"When I was listening to the story it sometimes seemed as if I were in the story world too.", 
            labels: scale_nas, required:true},
        {prompt:"When listening to the story there were moments in which I felt that the story world overlapped with my own world.", 
            labels: scale_nas, required:true},
        {prompt:"The world of the story sometimes felt closer to me than the world aroumd me.",
            labels: scale_nas, required:true},
        {prompt:"When I was finished with listening to the story it felt like I had taken a trip to the world of the story.",
            labels: scale_nas, required:true},
        {prompt:"Because all of my attention went into the story, I sometimes felt as if I could not exist seperate from the story.",
            labels: scale_nas, required:true},

        //emotional engagement
        {prompt:"When I listened the story I could imagine what it must be like to be in the shoes of the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt sympathy for the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt connected to the main character in the story.",
            labels: scale_nas, required:true},
        {prompt:"I felt how the main character was feeling.",
            labels: scale_nas, required:true},
        {prompt:"I felt for what happened in the story.",
            labels: scale_nas, required:true},

        //mental imagery
        {prompt:"When I was listening to the story I had an image of the main character in mind.", 
            labels: scale_nas, required:true},
        {prompt:"When I was listening to the story I could see the situations happening in the story being played out before my eyes.", 
            labels: scale_nas, required:true},
        {prompt:"I could imagine what the world in which the story took place looked like.", 
            labels: scale_nas, required:true}

    ]
}
timeline.push(nasLikertOne);


/*********************************************AUDIO 2*/
/*
var realPodcastTwo = {
    type:'audio-button-response',
    stimulus:'audio/audioTwoFearless.mp3',
    prompt:'<h2>Podcast Audio 2</h2><p>The second podcast audio will now play for 5 minutes. Once you are finished you will be automatically forwarded to the questionnaire for this podcast.</p> ',
    choices:[], //REMOVE FOR TESTING
    trial_ends_after_audio:true
    //replay:true
    
};
timeline.push(realPodcastTwo); 


/***************************************nas2*/
/*
var scale_nas = [-3,-2,-1,0,1,2,3];

var nasLikertTwo = {
    type:'survey-likert',
    preamble:'<h2>Please complete the following questionnaire for Podcast 2</h2><p>Please indicate your responses according to the scale from:</p><p> <b>-3</b> (totally <b>DISAGREE</b>) to <b>3</b> (totally <b>AGREE</b>)</p>',
    questions:[
        //attention
        {prompt:'When I finished the story I was surprised to see that time had gone by so fast.',
            labels:scale_nas,required:true},
        {prompt:"When I was listening to the story I was focused on what happened in the story.", 
            labels: scale_nas, required:true},
        {prompt:"I felt absorbed in the story.", 
            labels: scale_nas, required:true},
        {prompt:"The story gripped me in such a way that I could close myselff off for things that were happening around me.", 
            labels: scale_nas, required:true},
        {prompt:"I was listening in such a concentrated manner that I had forgotten the world around me.", 
            labels: scale_nas, required:true},
       
        //transportation 
        {prompt:"When I was listening to the story it sometimes seemed as if I were in the story world too.", 
            labels: scale_nas, required:true},
        {prompt:"When listening to the story there were moments in which I felt that the story world overlapped with my own world.", 
            labels: scale_nas, required:true},
        {prompt:"The world of the story sometimes felt closer to me than the world aroumd me.",
            labels: scale_nas, required:true},
        {prompt:"When I was finished with listening to the story it felt like I had taken a trip to the world of the story.",
            labels: scale_nas, required:true},
        {prompt:"Because all of my attention went into the story, I sometimes felt as if I could not exist seperate from the story.",
            labels: scale_nas, required:true},

        //emotional engagement
        {prompt:"When I listened to the story I could imagine what it must be like to be in the shoes of the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt sympathy for the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt connected to the main character in the story.",
            labels: scale_nas, required:true},
        {prompt:"I felt how the main character was feeling.",
            labels: scale_nas, required:true},
        {prompt:"I felt for what happened in the story.",
            labels: scale_nas, required:true},

        //mental imagery
        {prompt:"When I was listening to the story I had an image of the main character in mind.", 
            labels: scale_nas, required:true},
        {prompt:"When I was listening to the story I could see the situations happening in the story being played out before my eyes.", 
            labels: scale_nas, required:true},
        {prompt:"I could imagine what the world in which the story took place looked like.", 
            labels: scale_nas, required:true}

    ]
}
timeline.push(nasLikertTwo);

/*********************************************AUDIO 3*/
/*
var realPodcastThree = {
    type:'audio-button-response',
    stimulus:'audio/audioThreeBatman.mp3',
    prompt:'<h2>Podcast Audio 3</h2><p>The third podcast audio will now play for 6 minutes. Once you are finished you will be automatically forwarded to the questionnaire for this podcast.</p> ',
    choices:[], //REMOVE FOR TESTING
    trial_ends_after_audio:true
    //replay:true
    
};
timeline.push(realPodcastThree); 


/***************************************nas3*/

/*
var nextNasOne = {
	type: 'html-button-response',
	stimulus: '<p><b>You will now be asked to complete the narrative absorption scale (NAS).</b> </p><p>Please make sure you scroll up and down to make sure you have completed each question.</p><p>When you are ready please click the button below.  </p>',
	choices: ['BEGIN']		  
}
timeline.push(nextNasOne);
*/
/*
var scale_nas = [-3,-2,-1,0,1,2,3];

var nasLikertThree = {
    type:'survey-likert',
    preamble:'<h2>Please complete the following questionnaire for Podcast 3</h2><p>Please indicate your responses according to the scale from:</p><p> <b>-3</b> (totally <b>DISAGREE</b>) to <b>3</b> (totally <b>AGREE</b>)</p>',
    questions:[
        //attention
        {prompt:'When I finished the story I was surprised to see that time had gone by so fast.',
            labels:scale_nas,required:true},
        {prompt:"When I was listening to the story I was focused on what happened in the story.", 
            labels: scale_nas, required:true},
        {prompt:"I felt absorbed in the story.", 
            labels: scale_nas, required:true},
        {prompt:"The story gripped me in such a way that I could close myselff off for things that were happening around me.", 
            labels: scale_nas, required:true},
        {prompt:"I was listening in such a concentrated manner that I had forgotten the world around me.", 
            labels: scale_nas, required:true},
       
        //transportation 
        {prompt:"When I was listening to the story it sometimes seemed as if I were in the story world too.", 
            labels: scale_nas, required:true},
        {prompt:"When listening to the story there were moments in which I felt that the story world overlapped with my own world.", 
            labels: scale_nas, required:true},
        {prompt:"The world of the story sometimes felt closer to me than the world aroumd me.",
            labels: scale_nas, required:true},
        {prompt:"When I was finished with listening to the story it felt like I had taken a trip to the world of the story.",
            labels: scale_nas, required:true},
        {prompt:"Because all of my attention went into the story, I sometimes felt as if I could not exist seperate from the story.",
            labels: scale_nas, required:true},

        //emotional engagement
        {prompt:"When I listened to the story I could imagine what it must be like to be in the shoes of the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt sympathy for the main character.",
            labels: scale_nas, required:true},
        {prompt:"I felt connected to the main character in the story.",
            labels: scale_nas, required:true},
        {prompt:"I felt how the main character was feeling.",
            labels: scale_nas, required:true},
        {prompt:"I felt for what happened in the story.",
            labels: scale_nas, required:true},

        //mental imagery
        {prompt:"When I was listening to the story I had an image of the main character in mind.", 
            labels: scale_nas, required:true},
        {prompt:"When I was listening the story I could see the situations happening in the story being played out before my eyes.", 
            labels: scale_nas, required:true},
        {prompt:"I could imagine what the world in which the story took place looked like.", 
            labels: scale_nas, required:true}

    ]
}
timeline.push(nasLikertThree);


var finishPodcasts = {
	type: 'html-button-response',
	stimulus:'<h2> Thank you for listening to the podcasts and completing the questionnaires.</h2><p>Please click NEXT and proceed to the remainder of the experiment.</p>',
    choices: ['NEXT']		  
}
timeline.push(finishPodcasts); 
*/


/************************/
/**     PSIQ LIKERT     **/
/************************/
/*var nextPsi = {
	type: 'html-button-response',
	stimulus: '<h2>You will now be asked to complete the Plymouth Sensory Imagery Questionnaire (PSI-Q).</b></p><p>Please make sure you scroll to the top and bottom to make sure you have completed each question.</p><p>When you are ready please click the button below.  </p>',
	choices: ['BEGIN']		  
}
timeline.push(nextPsi);*/
/*
var scale_PSI = [0,1,2,3,4,5,6,7,8,9,10];

var PSI_likert = {
    type:'survey-likert',
    preamble:'<h2><b>Plymouth Sensory Imagery Questionnaire</b></h2><p>Please try to form the images described below and rate each mental image on the following scale.<br>Indicate your response for every item on the scale from:<br> <b>0</b> (<b>no image</b> at all)   TO   <b>10</b> (image is <b>present</b> as <b>clear and VIVID</b> as real life)</p>',
    
    //appearence
    //prompt:'Imagine the appearance of :',
    questions:[
        {prompt:"Imagine the appearance of a friend you know well", labels: scale_PSI, required:true},
        {prompt:"Imagine the appearance of a cat climbing a tree", labels: scale_PSI, required:true},
        {prompt:"Imagine the appearance of a sunset", labels: scale_PSI, required:true},
        {prompt:"Imagine the appearance of the front door of your house", labels: scale_PSI, required:true},
        {prompt:"Imagine the appearance of a bonfire", labels: scale_PSI, required:true},
    
    //sound
    //prompt:'Imagine the sound of :',
    
        {prompt:"Imagine the sound of an ambulance siren", labels: scale_PSI, required:true},
        {prompt:"Imagine the sound of hands clapping in applause", labels: scale_PSI, required:true},
        {prompt:"Imagine the sound of the mewing of a cat", labels: scale_PSI, required:true},
        {prompt:"Imagine the sound of a car horn", labels: scale_PSI, required:true},
        {prompt:"Imagine the sound of children playing", labels: scale_PSI, required:true},
    
    //smell
    //prompt:'Imagine the smell of :',
    
        {prompt:"Imagine the smell of a stuffy room", labels: scale_PSI, required:true},
        {prompt:"Imagine the smell of a rose", labels: scale_PSI, required:true},
        {prompt:"Imagine the smell of fresh paint", labels: scale_PSI, required:true},
        {prompt:"Imagine the smell of newly cut grass", labels: scale_PSI, required:true},
        {prompt:"Imagine the smell of burning of wood", labels: scale_PSI, required:true},
    
    //taste
    //prompt:'Imagine the taste of :',
    
        {prompt:"Imagine the taste of mustard", labels: scale_PSI, required:true},
        {prompt:"Imagine the taste of toothpaste", labels: scale_PSI, required:true},
        {prompt:"Imagine the taste of lemon", labels: scale_PSI, required:true},
        {prompt:"Imagine the taste of sea water", labels: scale_PSI, required:true},
        {prompt:"Imagine the taste of black pepper", labels: scale_PSI, required:true},
    
    //touching
    //prompt:'Imagine touching :',
  
        {prompt:"Imagine touching warm sand", labels: scale_PSI, required:true},
        {prompt:"Imagine touching a soft towel", labels: scale_PSI, required:true},
        {prompt:"Imagine touching the point of a pin", labels: scale_PSI, required:true},
        {prompt:"Imagine touching icy water", labels: scale_PSI, required:true},
        {prompt:"Imagine touching fur", labels: scale_PSI, required:true},
 
    //bodily sensation
    //prompt:'Imagine the bodily sensation of :',

        {prompt:"Imagine the bodily sensation of relaxing in a warm bath", labels: scale_PSI, required:true},
        {prompt:"Imagine the bodily sensation of having a sore throat", labels: scale_PSI, required:true},
        {prompt:"Imagine the bodily sensation of threading a needle", labels: scale_PSI, required:true},
        {prompt:"Imagine the bodily sensation of jumping into a swimming pool", labels: scale_PSI, required:true},
        {prompt:"Imagine the bodily sensation of walking briskly in the cold", labels: scale_PSI, required:true},
   
    //smell
    //prompt:'Imagine feeling :',
 
        {prompt:"Imagine feeling excited", labels: scale_PSI, required:true},
        {prompt:"Imagine feeling retrieved", labels: scale_PSI, required:true},
        {prompt:"Imagine feeling furious", labels: scale_PSI, required:true},
        {prompt:"Imagine feeling in love", labels: scale_PSI, required:true},
        {prompt:"Imagine feeling scared", labels: scale_PSI, required:true}
    ]
}

timeline.push(PSI_likert)

/************************/
/**     SUIS LIKERT     **/
/************************/
/*var nextSuis = {
	type: 'html-button-response',
	stimulus: '<p><b>You will now be asked to complete the Plymouth Sensory Imagery Questionnaire (PSI-Q). </b></p><p>Please make sure you scroll to the top and bottom to make sure you have completed each question.</p><p>When you are ready please click the button below.  </p>',
	choices: ['BEGIN']		  
}
timeline.push(nextPsi);*/

/*
var scale_SUIS = [1,2,3,4,5];

var SUIS_likert = {
    type:'survey-likert',
    preamble:'<h2><b>Spontaneous Use of Imagery Scale</b></h2><p>Please read each of the following descriptions and indicate the degree to which each is appropriate for you. Do not spend a lot of time thinking about each one, but respond based on your thoughts about how you do or do not perform each activity.<br><br><br>For each item, please select <b>"5"</b> if the description is completely <b>accurate</b>,<br> <b>"3"</b> if it is appropriate for about <b>half of the time</b>,<br> and <b>"1"</b> if <b>never</b> appropriate. </p>',
  
    questions:[
        {prompt:"When going to a new place, I prefer directions that include detailed descriptions of landmarks (such as the size, shape and color of a gas station) in addition to their names.", labels: scale_SUIS, required:true},
        {prompt:"If I catch a glance of a car that is partially hidden behind bushes, I automatically 'complete it,' seeing the entire car in my mind's eye.", labels: scale_SUIS, required:true},
        {prompt:"If I am looking for new furniture in a store, I always visualize what the furniture would look like in particular places in my home.", labels: scale_SUIS, required:true},
        {prompt:"I prefer to read novels that lead me easily to visualize where the characters are and what they are doing instead of novels that are difficult to visualize.", labels: scale_SUIS, required:true},
        {prompt:"When I think about visiting a relative, I almost always have a clear mental picture of him or her.", labels: scale_SUIS, required:true},
        {prompt:"When relatively easy technical material is described clearly in a text, I find illustrations distracting because they interfere with my ability to visualize the material.", labels: scale_SUIS, required:true},
        {prompt:"If someone were to tell me two-digit numbers to add (e.g. 24 and 31), I would visualize them in order to add them.", labels: scale_SUIS, required:true},
        {prompt:"Before I get dressed to go out, I first visualize what I will look like if I wear different combinations of clothes.", labels: scale_SUIS, required:true},
        {prompt:"When I think about a series of errands I must do, I visualize the stores I will visit.", labels: scale_SUIS, required:true},
        {prompt:"When I first hear a friend's voice, a visual image of him or her almost always springs to mind.", labels: scale_SUIS, required:true},
        {prompt:"When I hear a radio announcer or DJ I've never actually seen, I usually find myself picturing what they might look like.", labels: scale_SUIS, required:true},
        {prompt:"If I saw a car accident, I would visualize what had happened when later trying to recall the details.", labels: scale_SUIS, required:true},
        {prompt:"I form vivid mental images when I listen to someone telling me a story about a life event.", labels: scale_SUIS, required:true}
    ]
}

timeline.push(SUIS_likert)
*/


/**************************/
/** MAIN RESPONSE SCREEN **/
/**************************/
/*
var instructions = {
	type: 'html-button-response',
	stimulus: '<p><b>Matrix Reasoning Task</b></p><p>This is a pattern completion task. You will be presented with patterns, one pattern at a time.'+
			  '<p>One piece of the pattern will be missing. Your task is to select the best option that completes the pattern.</p><p>You will have '+specDuration+' minutes to complete as many patterns as you can.</p>',
	choices: ['BEGIN']		  
}

timeline.push(instructions);


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

timeline.push(rapm_proc); //push the procedure to the timeline
*/


var debrief = {
    type: 'image-button-response',
    stimulus: 'images/debrief1.png',
    prompt:'You have now completed the study. Thank you for your participation! Please click the button below to end.',
    choices:['Exit']
}
timeline.push(debrief);



/*************/
/** WRAP-UP **/ 
/*************/
//pavlovia close
var pavlovia_finish = {
			type: "pavlovia",
			command: "finish"
		};
		
timeline.push(pavlovia_finish); //comment out for offline testing


//fullscreen enter
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

/*
//final feedback screen
var matrixFinish = {
    type: "html-button-response",
    stimulus: function(){return "<p>This concludes the task.</p><p>Thank you for your participation!</p>" +	  
				  "<p><b>Total correct:</b> "+totalScore+"<br>"+
				  "<p><b>Total matrices seen:</b> "+totalSeen+"<br>"+
				  "<p><b>Total matrices in the set:</b> "+matrixList.length+"<br>";},
    choices: ['Next']
    };
      
timeline.push(matrixFinish);
*/
//debrief form



//initialize the experiment
     jsPsych.init({
        timeline: timeline,
		//preload_images: img_preload,
		preload_images: debrief_preload,
	    preload_images: ncsTest_preload,
	    //preload_audio: audio_preload,
		show_progress_bar:true
      });
	  
	  