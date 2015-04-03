function DetailView() {
	var self = Ti.UI.createView({
		backgroundColor:'#00CC66',
		borderColor:'gray',
		borderWidth:1,
	});
    var popupWin = setPopupWindow();
    
    var lbl_state = setLabel('State:',10,50,80);
    lbl_state.color = 'white';
    var tf_state = setTextField('',3,130,100);
    tf_state.editable = false;
    var btn_dropState = setDropdownButton(3,230);
    self.add(lbl_state);
    self.add(tf_state);
    self.add(btn_dropState);
    //var getStateData = openJSON('ui/jsonFiles/stateList.json');
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
      
    var lbl_siteid = setLabel('Site ID:',10,300,100);
    lbl_siteid.color = 'white';
    var tf_siteid = setTextField('',3,400,100);
    tf_siteid.editable = false;
    var btn_dropSiteid = setDropdownButton(3,500);
    self.add(lbl_siteid);
    self.add(tf_siteid);
    self.add(btn_dropSiteid);
    //var getSiteidData = openJSON('ui/jsonFiles/siteList.json');
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
    var siteidData = getSiteidData.sites;
    var siteidSelect = setSelectTableView(siteidData);
    
    var lbl_visit = setLabel('Visit:',10,570,80);
    lbl_visit.color = 'white';
    var tf_visit = setTextField('',3,640,50);
    tf_visit.editable = false;
    var btn_dropVisit = setDropdownButton(3,690);
    self.add(lbl_visit);
    self.add(tf_visit);
    self.add(btn_dropVisit);
    //var getVisitData = openJSON('ui/jsonFiles/visitList.json');
    var visitFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'visitList.json');
	if (! visitFile.exists()) {
		var originalVisitJSON = openJSON('ui/jsonFiles/visitList.json');
		var visitFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'visitList.json');
		var jsonStringVisit =  JSON.stringify(originalVisitJSON);
		visitFile.write(jsonStringVisit);
		var visitJSON = openJSON(Titanium.Filesystem.applicationDataDirectory + '/visitList.json');
		var getVisitData = visitJSON;

	} else {
		var getVisitData = openJSON(Titanium.Filesystem.applicationDataDirectory + 'visitList.json');		
	}
    var visitData = getVisitData.visit;
    var visitSelect = setSelectTableView(visitData);
    
    btn_dropState.addEventListener('click', function() {
        popupWin.add(stateSelect);
        popupWin.open();    
    });
    stateSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_state.value = e.rowData.rowValue;
        popupWin.remove(stateSelect);
        popupWin.close();
        //change siteid data
        siteidData = getSiteidData.sites[tf_state.value];
        siteidSelect = updateSelectTableView(siteidData,siteidSelect);
    });
    btn_dropSiteid.addEventListener('click', function() {
        popupWin.add(siteidSelect);
        popupWin.open();    
    });

    siteidSelect.addEventListener('click',function(e){
        //reset dictionary
        formSiteDict = openFormSiteDict();        
        tf_siteid.value = e.rowData.rowValue;
        popupWin.remove(siteidSelect);
        popupWin.close();

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

        //var getSiteData = openJSON('ui/jsonFiles/siteDesc.json');
        siteLat = getSiteDescData.siteDesc[tf_siteid.value][0];
        siteLong = getSiteDescData.siteDesc[tf_siteid.value][1];
        siteType = getSiteDescData.siteDesc[tf_siteid.value][2];
        sitePanel = getSiteDescData.siteDesc[tf_siteid.value][3];
        
        self.fireEvent('siteidUpdated', {
            state:tf_state.value,
            siteid:tf_siteid.value,
            visitno:tf_visit.value,
            siteLat:siteLat,
            siteLong:siteLong,
            siteType:siteType,
            sitePanel:sitePanel,
        });
    });
   
   btn_dropVisit.addEventListener('click', function() {
        popupWin.add(visitSelect);
        popupWin.open();    
    });
    visitSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_visit.value = e.rowData.rowValue;
        popupWin.remove(visitSelect);
        popupWin.close();
        //change siteid data
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
        //var getSiteData = openJSON('ui/jsonFiles/siteDesc.json');
        siteLat = getSiteDescData.siteDesc[tf_siteid.value][0];
        siteLong = getSiteDescData.siteDesc[tf_siteid.value][1];
        siteType = getSiteDescData.siteDesc[tf_siteid.value][2];
        sitePanel = getSiteDescData.siteDesc[tf_siteid.value][3];
        
        self.fireEvent('siteidUpdated', {
            state:tf_state.value,
            siteid:tf_siteid.value,
            visitno:tf_visit.value,
            siteLat:siteLat,
            siteLong:siteLong,
            siteType:siteType,
            sitePanel:sitePanel,
        });
    });
   
    tf_siteid.addEventListener('blur',function(e){
        //reset dictionary
        formSiteDict = openformSiteDict();
        
        self.fireEvent('siteidUpdated', {
            state:tf_state.value,
            siteid:tf_siteid.value,
            visit:tf_visit.value,
        });
    });
    
    self.addEventListener('updateSiteInfo',function(e){
    	tf_state.value = e.state;
    	tf_siteid.value = e.site;

        self.fireEvent('siteidUpdated', {
            state:tf_state.value,
            siteid:tf_siteid.value,
            visit:tf_visit.value,
        });
    });

    return self;
};

module.exports = DetailView;
