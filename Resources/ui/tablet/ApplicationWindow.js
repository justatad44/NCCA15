function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
        DetailView = require('ui/common/DetailView'),
        FormView = require('ui/common/FormView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var masterView = new MasterView(),
        detailView = new DetailView(),
		formView = new FormView();

	masterView.borderColor = 'gray';
	masterView.borderWidth = 1;

	//create master view container
	var masterContainer = Ti.UI.createView({
		top:90,
		bottom:0,
		left:0,
		width:59,
	});
	masterContainer.add(masterView);
	self.add(masterContainer);

	//create detail view container
	var detailContainer = Ti.UI.createView({
		top:30,
		height:55,
		right:0,
		left:0
	});
	detailContainer.add(detailView);
	self.add(detailContainer);

    var formContainer = Ti.UI.createView({
        top:90,
        bottom:0,
        right:0,
        left:59,
    });
    formContainer.add(formView);
    self.add(formContainer);
	
    var viewSite = setView_formSite();
    viewSite.visible = false;
    var viewField = setView_formField();
    viewField.visible = false;
    var viewProfile = setView_formProfile();
    viewProfile.visible = false;
    var viewSample = setView_formSample();
    viewSample.visible = false;
    var viewFishEco = setView_formFishEco();
    viewFishEco.visible = false;
    var viewFishHuman = setView_formFishHuman();
    viewFishHuman.visible = false;
    var viewAssess = setView_formAssess();
    viewAssess.visible = false;
    var viewTrack = setView_formTracking();
    viewTrack.visible = false;
    formContainer.add(viewSite);
    formContainer.add(viewField);
    formContainer.add(viewProfile);    
    formContainer.add(viewSample);
    formContainer.add(viewFishEco);
    formContainer.add(viewFishHuman);
    formContainer.add(viewAssess);
    formContainer.add(viewTrack);
    formContainer.borderColor = 'gray';
    formContainer.borderWidth = 1;
    

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
        if (e.view == 'SITEVERIFICATION') {
            viewSite.show();
            viewField.hide();
            viewProfile.hide();
            viewSample.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'FIELDMEASUREMENT') {
            viewField.show();
            viewProfile.hide();
            viewSite.hide();
            viewSample.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'PROFILE') {
            viewField.hide();
            viewProfile.show();
            viewSite.hide();
            viewSample.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'SAMPLECOLLECTION') {
            viewSample.show();
            viewSite.hide();
            viewField.hide();
            viewProfile.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'FISHECO') {
            viewFishEco.show();
            viewSite.hide();
            viewField.hide();
            viewProfile.hide();
            viewFishHuman.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'FISHHUMAN') {
            viewFishHuman.show();
            viewSite.hide();
            viewField.hide();
            viewProfile.hide();
            viewFishEco.hide();
            viewAssess.hide();
            viewTrack.hide();
        }
        if (e.view == 'ASSESSMENT') {
            viewAssess.show();
            viewSite.hide();
            viewField.hide();
            viewProfile.hide();
            viewSample.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewTrack.hide();
        }
        if (e.view == 'TRACKING') {
            viewTrack.show();
            viewSite.hide();
            viewField.hide();
            viewProfile.hide();
            viewSample.hide();
            viewFishEco.hide();
            viewFishHuman.hide();
            viewAssess.hide();
        }
        if (e.view == 'LOADTESTDATA') {
            testData ();
        }
	});
	masterView.addEventListener('submitForms',function(e){
	    var emailDialog = Titanium.UI.createEmailDialog();
	    emailDialog.subject = "NCCA15 submission: " + detailView.uid;    
	    emailDialog.toRecipients = ['NARSFieldData@epa.gov'];
	    emailDialog.messageBody = 'The attached file(s) contain(s) data that were entered into the NCCA15 app.';

	    for (form in e.formArray) {
	 	    var fullJSON = {};
		    	    	    
		    var formFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,detailView.uid + '_' + e.formArray[form] + '.json');
		    if (formFile.exists()) {
		        var formData = formFile.read().text;
		        var formObj = JSON.parse(formData);
		        
		        if (formObj[e.formArray[form]] === undefined) {
    				fullJSON[e.formArray[form]] = formObj;
    			} else {
    				fullJSON = formObj;
    			}
				
				if (fullJSON ["UID"] === undefined) {
				    fullJSON ['UID'] = detailView.uid;
				    fullJSON ['SITE_ID'] = detailView.siteid;
				    fullJSON ['VISIT_NO'] = detailView.visitno;
				    fullJSON ['YEAR'] = '2015';
				    fullJSON ['APP_PLATFORM'] = Titanium.Platform.name;
				    fullJSON ['APP_VERSION'] = Ti.App.gl_version;
				    fullJSON ['STUDY_NAME'] = 'NCCA15';
				}
		    }
		    var jsonString =  JSON.stringify(fullJSON);
		    var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,detailView.uid + '_' + e.formArray[form] + '__submitted.json');
		    if (jsonFile.exists()) {
		    	jsonFile.deleteFile();
		    	var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,detailView.uid + '_' + e.formArray[form] + '__submitted.json');
		    }
		    jsonFile.write(jsonString);
		    
		    //send consolidated file
		    emailDialog.addAttachment(jsonFile);
	    }
	    emailDialog.open();
	    
	});
	masterView.addEventListener('updateSiteList',function(e){
	    var siteFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'siteList.json');
		if (! siteFile.exists()) {
			var originalSiteJSON = openJSON('ui/jsonFiles/siteList.json');
			var siteFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'siteList.json');
			var jsonStringSite =  JSON.stringify(originalSiteJSON);
			siteFile.write(jsonStringSite);
			var siteJSON = openJSON(Titanium.Filesystem.applicationDataDirectory + '/siteList.json');
			var getSiteidData = siteJSON;
		} else {
			var getSiteidData = openJSON(Titanium.Filesystem.applicationDataDirectory + 'siteList.json');
		}
		var stateArray = getSiteidData.sites[e.state];
		stateArray.push(e.site);
		getSiteidData.sites[e.state] = stateArray;		
        saveJSON(getSiteidData,'siteList.json');
        
        // siteDesc.json
	    var siteDescFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'siteDesc.json');
		if (! siteDescFile.exists()) {
			var originalSiteDescJSON = openJSON('ui/jsonFiles/siteDesc.json');
			var siteDescFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'siteDesc.json');
			var jsonStringSiteDesc =  JSON.stringify(originalSiteDescJSON);
			siteDescFile.write(jsonStringSiteDesc);
			var siteDescJSON = openJSON(Titanium.Filesystem.applicationDataDirectory + '/siteDesc.json');
			var getSiteDescData = siteDescJSON;
		} else {
			var getSiteDescData = openJSON(Titanium.Filesystem.applicationDataDirectory + 'siteDesc.json');
		}
		//var siteDescArray = getSiteDescData.siteDesc[e.site];
		siteDescArray = ['Not Available','Not Available','Not Available','Not Available'];
		getSiteDescData.siteDesc[e.site] = siteDescArray;		
        saveJSON(getSiteDescData,'siteDesc.json');

        detailView.fireEvent('updateSiteInfo', {state:e.state,site:e.site});	
	});
    detailView.addEventListener('siteidUpdated', function(e) {
        detailView.siteid = e.siteid;
        detailView.visitno = e.visitno;
        detailView.uid = e.siteid + '_' + e.visitno;
        detailView.state = e.state;
        detailView.siteLat = e.siteLat;
        detailView.siteLong = e.siteLong;
        detailView.siteType = e.siteType;
        detailView.sitePanel = e.sitePanel;
       
        viewSite.fireEvent("updateFormSite",{siteid:e.siteid,visitno:e.visitno,state:e.state,siteLat:e.siteLat,siteLong:e.siteLong, siteType:e.siteType,sitePanel:e.sitePanel});
        viewField.fireEvent("updateFormField",{siteid:e.siteid,visitno:e.visitno});
        viewProfile.fireEvent("updateFormProfile",{siteid:e.siteid,visitno:e.visitno});
        viewSample.fireEvent("updateFormSample",{siteid:e.siteid,visitno:e.visitno});
        viewFishEco.fireEvent("updateFormFishEco",{siteid:e.siteid,visitno:e.visitno});
        viewFishHuman.fireEvent("updateFormFishHuman",{siteid:e.siteid,visitno:e.visitno});
        viewAssess.fireEvent("updateFormAssess",{siteid:e.siteid,visitno:e.visitno});
        viewTrack.fireEvent("updateFormTracking",{siteid:e.siteid,visitno:e.visitno});
    });
    
    formContainer.addEventListener('chemIDUpdated',function(e) {
        viewFishEco.fireEvent("updateFormFishEco",{siteid:e.siteid,visitno:e.visitno});
        viewFishHuman.fireEvent("updateFormFishHuman",{siteid:e.siteid,visitno:e.visitno});
        viewTrack.fireEvent("updateFormTracking",{siteid:e.siteid,visitno:e.visitno}); 
    });
 
    formContainer.addEventListener('siteTypeUpdated',function(e) {
        viewSample.fireEvent("updateFormSample",{siteid:e.siteid,visitno:e.visitno});
    });
    return self;
};

module.exports = ApplicationWindow;
