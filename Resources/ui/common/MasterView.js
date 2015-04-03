//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'#006699',
		//layout:'vertical',
	});
    var popupWin = setMenuWindow();
    var popupWinAddSite = setMenuWindow();
    var popupWin2 = setMenuWindow();
    var btn_menu = setMenuButton(5,5,false);
    btn_menu.open = true;
    self.add(btn_menu);
    
    btn_addSite = setAddSiteButton(80,5,true);
    btn_addSite.open = true;
    self.add(btn_addSite);

    btn_submit = setSubmitButton(155,5,true);
    btn_submit.open = true;
    self.add(btn_submit);
    
    var text_rotator = Ti.UI.create2DMatrix({
        rotate:90,
    });
    
    lbl_version = Ti.UI.createLabel({
        top:300,
        width:200,
        text:'Version:' + Ti.App.version,
        color:'white',
        transform:text_rotator,
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
    });
    
    self.add(lbl_version);

    var menuArray = ['SITE VERIFICATION','FIELD MEASUREMENT','PROFILE','SAMPLE COLLECTION','FISH ECO', 'FISH HUMAN','ASSESSMENT','TRACKING','LOAD TEST DATA'];
    var viewArray = ['SITEVERIFICATION','FIELDMEASUREMENT','PROFILE','SAMPLECOLLECTION','FISHECO', 'FISHHUMAN','ASSESSMENT','TRACKING','LOADTESTDATA'];
    var tableView = setMasterView(menuArray,viewArray);

    //add behavior
    btn_menu.addEventListener('click', function(e) {
        if (btn_menu.open) {
            btn_menu.open = false;
            btn_menu.backgroundImage = 'ui/images/menu_arrow_left.png';
            popupWin.add(tableView);
            popupWin.left = -300;
            var slideIn = Ti.UI.createAnimation({
                left:59,
                duration:300,
            });
            popupWin.open(slideIn);      
        } else {
            btn_menu.open = true;
            btn_menu.backgroundImage = 'ui/images/menu_arrow_right.png';
            var slideOut = Ti.UI.createAnimation({
                left:-300,
                duration:300,
            });
            popupWin.remove(tableView);
            popupWin.close(slideOut);
        }
    });
    
    //add site view
    var addSiteView = Ti.UI.createView({
        backgroundColor:'#006699',
    });
    var lbl_addSiteState = setSmallLabel('State',15,20,250);
    addSiteView.add(lbl_addSiteState);
    var tf_addSiteState = setTextField('',50,20,200);
    tf_addSiteState.editable = false;
    var btn_addSiteState = setDropdownButton(50,220);
    addSiteView.add(tf_addSiteState);
    addSiteView.add(btn_addSiteState);

    var lbl_addSiteSiteID = setSmallLabel('Site ID',115,20,250);
    addSiteView.add(lbl_addSiteSiteID);
    var tf_addSiteSiteID = setTextField('',150,20,250);
    addSiteView.add(tf_addSiteSiteID);
	
    btn_addSiteButton = setBlueButton('Add Site',265,20,250,60);
    addSiteView.add(btn_addSiteButton);
	
	var getStateData = openJSON('ui/jsonFiles/stateList.json');
    var stateFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'stateList.json');
	if (! stateFile.exists()) {
		var originalStateJSON = openJSON('ui/jsonFiles/stateList.json');
		var stateFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'stateList.json');
		var jsonStringState =  JSON.stringify(originalStateJSON);
		stateFile.write(jsonStringState);
		var stateJSON = openJSON(Titanium.Filesystem.applicationDataDirectory + '/stateList.json');
		var getStateData = stateJSON;
	} else {
		var getStateData = openJSON(Titanium.Filesystem.applicationDataDirectory + 'stateList.json');
	}
	var stateData = getStateData.states;
    var stateSelect = setSelectTableView(stateData);
	
    btn_addSiteState.addEventListener('click', function() {
        popupWin.add(stateSelect);
        popupWin.open();
    });

    stateSelect.addEventListener('click',function(e) {
        //reset dictionary
        tf_addSiteState.value = e.rowData.rowValue;
        popupWin.remove(stateSelect);
        popupWin.close();
    });

	btn_addSiteButton.addEventListener('click', function() {
		var siteState = tf_addSiteState.value;
		var state = tf_addSiteState.value;
		var site = tf_addSiteSiteID.value;	
		self.fireEvent('updateSiteList', {state:state,site:site});
		
        btn_addSite.open = true;
        var slideOut = Ti.UI.createAnimation({
            left:-300,
            duration:300,
        });
        popupWinAddSite.remove(addSiteView);
        popupWinAddSite.close(slideOut);
	});

    btn_addSite.addEventListener('click',function() {
        if (btn_addSite.open) {
            btn_addSite.open = false;
            popupWinAddSite.add(addSiteView);
            popupWinAddSite.left = -300;
            var slideIn = Ti.UI.createAnimation({
                left:59,
                duration:300,
            });
            popupWinAddSite.open(slideIn);      
        } else {
            btn_addSite.open = true;
            var slideOut = Ti.UI.createAnimation({
                left:-300,
                duration:300,
            });
            popupWinAddSite.remove(addSiteView);
            popupWinAddSite.close(slideOut);
        }
    });

    // submission view
    var submitView = Ti.UI.createView({
        backgroundColor:'#006699',
    });
    var btn_submitSite = setRadioButton(5,10,false);
    var lbl_submitSite = setSmallLabel('SITE VERIFICATION',15,70,250);
    submitView.add(btn_submitSite);
    submitView.add(lbl_submitSite);
    btn_submitSite.addEventListener('click',function() {
        switchRadioButton(btn_submitSite);
    });
    var btn_submitFieldMeas = setRadioButton(55,10,false);
    var lbl_submitFieldMeas = setSmallLabel('FIELD MEASUREMENT',65,70,250);
    submitView.add(btn_submitFieldMeas);
    submitView.add(lbl_submitFieldMeas);
    btn_submitFieldMeas.addEventListener('click',function() {
        switchRadioButton(btn_submitFieldMeas);
    });
    var btn_submitProfile = setRadioButton(105,10,false);
    var lbl_submitProfile = setSmallLabel('PROFILE',115,70,250);
    submitView.add(btn_submitProfile);
    submitView.add(lbl_submitProfile);
    btn_submitProfile.addEventListener('click',function() {
        switchRadioButton(btn_submitProfile);
    });
    var btn_submitSamp = setRadioButton(155,10,false);
    var lbl_submitSamp = setSmallLabel('SAMPLE COLLECTION',165,70,250);
    submitView.add(btn_submitSamp);
    submitView.add(lbl_submitSamp);
    btn_submitSamp.addEventListener('click',function() {
        switchRadioButton(btn_submitSamp);
    });
    var btn_submitFishEco = setRadioButton(205,10,false);
    var lbl_submitFishEco = setSmallLabel('ECO FISH',215,70,250);
    submitView.add(btn_submitFishEco);
    submitView.add(lbl_submitFishEco);
    btn_submitFishEco.addEventListener('click',function() {
        switchRadioButton(btn_submitFishEco);
    });
    var btn_submitFishHuman = setRadioButton(255,10,false);
    var lbl_submitFishHuman = setSmallLabel('HUMAN FISH',265,70,250);
    submitView.add(btn_submitFishHuman);
    submitView.add(lbl_submitFishHuman);
    btn_submitFishHuman.addEventListener('click',function() {
        switchRadioButton(btn_submitFishHuman);
    });
    var btn_submitAssess = setRadioButton(305,10,false);
    var lbl_submitAssess = setSmallLabel('ASSESSMENT',315,70,250);
    submitView.add(btn_submitAssess);
    submitView.add(lbl_submitAssess);
    btn_submitAssess.addEventListener('click',function() {
        switchRadioButton(btn_submitAssess);
    });
    var btn_submitTracking = setRadioButton(355,10,false);
    var lbl_submitTracking = setSmallLabel('TRACKING',365,70,250);
    submitView.add(btn_submitTracking);
    submitView.add(lbl_submitTracking);
    btn_submitTracking.addEventListener('click',function() {
        switchRadioButton(btn_submitTracking);
    });
    btn_submitForms = setBlueButton('Submit Forms',415,20,250,60);
    submitView.add(btn_submitForms);
    
    btn_submit.addEventListener('click',function() {
        //self.fireEvent('submitForms', {});
        if (btn_submit.open) {
            btn_submit.open = false;
            popupWin2.add(submitView);
            popupWin2.left = -300;
            var slideIn = Ti.UI.createAnimation({
                left:59,
                duration:300,
            });
            popupWin2.open(slideIn);      
        } else {
            btn_submit.open = true;
            var slideOut = Ti.UI.createAnimation({
                left:-300,
                duration:300,
            });
            popupWin2.remove(submitView);
            popupWin2.close(slideOut);
        }
    });
    btn_submitForms.addEventListener('click',function() {
        //self.fireEvent('submitForms', {});
        btn_submit.open = true;
        var slideOut = Ti.UI.createAnimation({
            left:-300,
            duration:300,
        });
        popupWin2.remove(submitView);
        popupWin2.close(slideOut);
        var formArray = [];
        if (btn_submitSite.state) {formArray.push('SITEVERIFICATION');}
        if (btn_submitFieldMeas.state) {formArray.push('FIELDMEASUREMENT');}
        if (btn_submitProfile.state) {formArray.push('PROFILE');}
        if (btn_submitSamp.state) {formArray.push('SAMPLECOLLECTION');}
        if (btn_submitFishEco.state) {formArray.push('FISHECO');}
        if (btn_submitFishHuman.state) {formArray.push('FISHHUMAN');}
        if (btn_submitAssess.state) {formArray.push('ASSESSMENT');}
        if (btn_submitTracking.state) {formArray.push('TRACKING');}

        self.fireEvent('submitForms', {formArray:formArray});
    });
        
    var text_rotator = Ti.UI.create2DMatrix({
        rotate:90,
    });
    var lbl_vertical = Ti.UI.createLabel({
        top:750,
        width:600,
        text:'',
        color:'white',
        transform:text_rotator,
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
    });
    self.add(lbl_vertical);
    tableView.addEventListener('click', function(e) {
        popupWin.remove(tableView);
        popupWin.close();
        btn_menu.open = true;
        btn_menu.backgroundImage = 'ui/images/menu_arrow_right.png';
        self.fireEvent('itemSelected', {
            view:e.rowData.viewValue,
        });
        lbl_vertical.text = e.rowData.rowValue;
    });
    /*submitView.addEventListener('click', function(e) {
        popupWin.remove(submitView);
        popupWin.close();
        btn_submit.open = true;
        self.fireEvent('submitForms', {});
    });*/

function setSubmitView(labelArray,viewArray){
    //loop through arrays and make table view
    var currentTop = 10;
    var elementTop = 3;
    
    var view = Titanium.UI.createView({
        backgroundColor:'#006699',
    });
    
    for (var i = 0; i < labelArray.length; i++) {
        var btn_radio = setRadioButton(elementTop,5,false);
        var lbl = setLabel(labelArray[i],currentTop,65,250);
        view.add(btn_radio);
        view.add(lbl);
        currentTop += 50;
        elementTop += 50;

        btn_radio.addEventListener('click',function() {
            switchRadioButton(btn_radio);
        });   
    }
    
    btn_submitForms = setBlueButton('Submit Forms',currentTop,5,250,60);
    view.add(btn_submitForms);

    return view;
}

    
	return self;
};

module.exports = MasterView;