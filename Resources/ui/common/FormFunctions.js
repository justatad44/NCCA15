function formatValues() {
    var formatter = new Object();
    formatter.buttonWidth = 50;
    formatter.labelSpace = 40;
    formatter.otherSpace = 70;
    //fit to new layout
    formatter.colIndent = 10;
    formatter.leftIndent = 30;
    formatter.colWidth1 = 670;
    formatter.leftCol2_2 = 355;
    formatter.colWidth2 = 325;
    formatter.leftCol3_2 = 240;
    formatter.leftCol3_3 = 470;
    formatter.colWidth3 = 210;
    formatter.leftCol4_2 = 183;
    formatter.leftCol4_3 = 355;
    formatter.leftCol4_4 = 527;
    formatter.colWidth4 = 153;
    //Not fit to new layout
    formatter.leftCol5_2 = 162;
    formatter.leftCol5_3 = 294;
    formatter.leftCol5_4 = 426;
    formatter.leftCol5_5 = 558;
    formatter.colWidth5 = 122;
    formatter.leftCol6_2 = 162;
    formatter.leftCol6_3 = 284;
    formatter.leftCol6_4 = 406;
    formatter.leftCol6_5 = 528;
    formatter.leftCol6_6 = 650;
    formatter.colWidth6 = 122;
    formatter.leftCol8_2 = 100;
    formatter.leftCol8_3 = 160;
    formatter.leftCol8_4 = 255;
    formatter.leftCol8_5 = 340;
    formatter.leftCol8_6 = 465;
    formatter.leftCol8_7 = 580;
    formatter.leftCol8_8 = 625;
    formatter.colWidth8 = 90;
    formatter.leftCol10_2 = 65;
    formatter.leftCol10_3 = 160;
    formatter.leftCol10_4 = 255;
    formatter.leftCol10_5 = 300;
    formatter.leftCol10_6 = 395;
    formatter.leftCol10_7 = 440;
    formatter.leftCol10_8 = 535;
    formatter.leftCol10_9 = 580;
    formatter.leftCol10_10 = 625;
    formatter.colWidth10 = 80;
    
    return formatter;
}

function setView_formSite() {
    f = formatValues();
    formSiteDict = openFormSiteDict();
    view = setFormView();
    scrollView = setScrollView();
    popupWin = setPopupWindow();

//mrc - 1/15/2015 make all dropdown option textfields not editable so only choices are from the dropdown list
    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
    
    hdr_siteInfo = setHeader('SITE INFORMATION',currentTop);
    scrollView.add(hdr_siteInfo);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
 
    var lbl_siteLabel = setLabel('Site ID:',currentTop,f.leftIndent,f.colWidth3);
    var lbl_siteLatLabel = setLabel('Design Lat:',currentTop,f.leftCol3_2,f.colWidth3);
    var lbl_siteLongLabel = setLabel('Design Lon:',currentTop,f.leftCol3_3,f.colWidth3);
    scrollView.add(lbl_siteLabel);
    scrollView.add(lbl_siteLatLabel);
    scrollView.add(lbl_siteLongLabel);

    currentTop += f.labelSpace;
    elementTop += f.labelSpace;

    var lbl_siteNameD = setLabel('',currentTop,f.leftIndent,f.colWidth3);
    var lbl_siteLat = setLabel('',currentTop,f.leftCol3_2,f.colWidth3);
    var lbl_siteLong = setLabel('',currentTop,f.leftCol3_3,f.colWidth3);
    scrollView.add(lbl_siteNameD);
    scrollView.add(lbl_siteLat);
    scrollView.add(lbl_siteLong);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    spacer = setSpacer(currentTop,20,650);
    scrollView.add(spacer);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    lbl_siteName = setLabelI('Site Name:',currentTop,f.colIndent,f.colWidth2);
    tf_siteName = setTextFieldHint('',elementTop,f.leftCol4_2,497,'Enter local name of site');
    scrollView.add(lbl_siteName);
    scrollView.add(tf_siteName);
    var siteNameMeta = setMetaView('Local name of site');
    lbl_siteName.addEventListener('click', function() {
        view.add(siteNameMeta);
        siteNameMeta.show();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    lbl_crew = setLabelI('Field Crew:',currentTop, f.colIndent, f.colWidth4);
    tf_crew = setTextFieldHint('',elementTop, f.leftCol4_2, f.colWidth4, 'Crew code');
    scrollView.add(lbl_crew);
    scrollView.add(tf_crew);
    var crewMeta = setMetaView('Crew code, typically STATECODE+number, e.g. MI1');
    lbl_crew.addEventListener('click', function() {
        view.add(crewMeta);
        crewMeta.show();
    });
    
    var pickerWin = setPopupWindow();
    var picker = Ti.UI.createPicker({
        useSpinner:true,
        type:Ti.UI.PICKER_TYPE_DATE,
        minDate:new Date(2015,03,01),
        maxDate:new Date(2015,10,31),
        value:new Date(2015,3,12),
        top:50      
    });
   
    var pickerButton = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'black',
        height:50,
        width:150,
        title:'Add date',
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:18,fontWeight:'bold'},
    });
   
    pickerWin.add(picker);
    pickerWin.add(pickerButton);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    
    lbl_date = setLabelI('Date Collected:',currentTop, f.colIndent, f.colWidth3);
    tf_date = setTextFieldNumber('',elementTop, f.leftCol3_2, f.colWidth3,'mmddyyyy');
    tf_date.editable = false;
    btn_date = setDropdownButton(elementTop, f.leftCol3_3);
    scrollView.add(lbl_date);
    scrollView.add(tf_date);
    scrollView.add(btn_date);
    var dateMeta = setMetaView('Date site was visited.  Enter as mmddyyy, slashes will be inserted');
    lbl_date.addEventListener('click', function() {
        view.add(dateMeta);
        dateMeta.show();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    lbl_depth = setLabelI('Station Depth:',currentTop, f.colIndent, f.colWidth4 + 20);
    tf_depth = setTextFieldNumber('',elementTop, f.leftCol4_2, f.colWidth4,'xx.x');
    scrollView.add(lbl_depth);
    scrollView.add(tf_depth);
    var depthMeta = setMetaView('Station depth in meters');
    lbl_depth.addEventListener('click', function() {
        view.add(depthMeta);
        depthMeta.show();
    });
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    currentTop += 20;
    elementTop += 20;

    hdr_sampled = setHeader('DID YOU SAMPLE THIS SITE?',currentTop);
    scrollView.add(hdr_sampled);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    stateSampled = false;
    //  if (formSiteDict['SAMPLED'] == 'Y') {stateSampled = true};
    btn_radioSampledY = new setRadioButton((elementTop),(f.colIndent),false);
    btn_radioSampledN = new setRadioButton((elementTop),(f.leftCol4_3),false);
    lbl_Y = setLabel('YES [select one below]',currentTop,f.colIndent + 60,f.colWidth2);
    lbl_N = setLabel('NO [select one below]',currentTop,f.leftCol4_3 + 60,f.colWidth2);
    scrollView.add(btn_radioSampledY);
    scrollView.add(btn_radioSampledN);
    scrollView.add(lbl_Y);
    scrollView.add(lbl_N);
    
    currentTop += 50;
    elementTop += 50;
    
    spacerSample = setSpacer(currentTop,f.colIndent,f.colWidth2);
    scrollView.add(spacerSample);

    spacerSample2 = setSpacer(currentTop,f.leftCol2_2,f.colWidth2);
    scrollView.add(spacerSample2);

    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    lbl_sampleable = setLabel('SAMPLEABLE (choose method)',currentTop,f.colIndent,f.colWidth2);
    lbl_nonSampPerm = setLabel('NON-SAMPLEABLE PERMANENT',currentTop,f.leftCol2_2,f.colWidth2);
    scrollView.add(lbl_sampleable);
    scrollView.add(lbl_nonSampPerm);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    tf_sampleable = setTextFieldHint('',currentTop,f.colIndent,f.colWidth2 - f.buttonWidth, 'Make Selection');
    tf_sampleable.editable = false;
    btn_sampleable = setDropdownButton(currentTop,f.colIndent + f.colWidth2 - f.buttonWidth);
    btn_sampleable.enabled = false;
    sampleableData = ['MARINE','GREAT_LAKES'];
    sampleableSelect = setSelectTableView(sampleableData);
    tf_nonSampPerm = setTextFieldHint('',currentTop,f.leftCol2_2,f.colWidth2 - f.buttonWidth, 'Make Selection');
    tf_nonSampPerm.editable = false;
    btn_nonSampPerm = setDropdownButton(currentTop,f.leftCol2_2 + f.colWidth2 - f.buttonWidth);
    btn_nonSampPerm.enabled = false;
    nonSampPermData = ['MAP_ERROR','MAP ERROR','SHALLOW','SHALLOW','UNSAFE','UNSAFE','NO_ACCESS','NO ACCESS'];
    nonSampPermSelect = setSelectTableView2(nonSampPermData);
    scrollView.add(tf_sampleable);
    scrollView.add(btn_sampleable);
    scrollView.add(tf_nonSampPerm);
    scrollView.add(btn_nonSampPerm);

    btn_sampleable.addEventListener('click', function() {
        popupWin.add(sampleableSelect);
        popupWin.open();    
    });
    sampleableSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_sampleable.value = e.rowData.rowValue;
        popupWin.remove(sampleableSelect);
        popupWin.close();
    });    
    btn_nonSampPerm.addEventListener('click', function() {
        popupWin.add(nonSampPermSelect);
        popupWin.open();    
    });
    nonSampPermSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_nonSampPerm.value = e.rowData.rowValue;
        popupWin.remove(nonSampPermSelect);
        popupWin.close();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_arrivalTime = setLabelI('Arrival:',currentTop,f.colIndent,f.colWidth4);
    tf_arrivalTime = setTextFieldNumber('',elementTop,f.leftCol4_2 - 50,f.colWidth4,'hhmm');
    tf_arrivalTime.enabled = false;
    lbl_nonSampTemp = setLabel('NON-SAMPLEABLE TEMPORARY',elementTop,f.leftCol2_2,f.colWidth2);
    scrollView.add(lbl_arrivalTime);
    scrollView.add(tf_arrivalTime);
    scrollView.add(lbl_nonSampTemp);
    
    var arrivalTimeMeta = setMetaView('Time of day arrived at the site. Enter as hhmm (24-hr), : will be inserted');
    lbl_arrivalTime.addEventListener('click', function() {
        view.add(arrivalTimeMeta);
        arrivalTimeMeta.show();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    lbl_departTime = setLabelI('Depart:',currentTop,f.colIndent,f.colWidth4);
    tf_departTime = setTextFieldNumber('',elementTop,f.leftCol4_2 - 50,f.colWidth4,'hhmm');
    tf_departTime.enabled = false;
    tf_nonSampTemp = setTextFieldHint('',elementTop,f.leftCol2_2,f.colWidth2 - f.buttonWidth, 'Make Selection');
    tf_nonSampTemp.editable = false;
    btn_nonSampTemp = setDropdownButton(elementTop,f.leftCol2_2 + f.colWidth2 - f.buttonWidth);
    btn_nonSampTemp.enabled = false;
    nonSampTempData = ['INACCTEMP','TEMPORARILY INACCESSIBLE','OTHER_NST','OTHER (EXPLAIN IN COMMENTS)'];
    nonSampTempSelect = setSelectTableView2(nonSampTempData);
    scrollView.add(lbl_departTime);
    scrollView.add(tf_departTime);
    scrollView.add(tf_nonSampTemp);
    scrollView.add(btn_nonSampTemp);
    var departTimeMeta = setMetaView('Time of day departed site. Enter as hhmm (24-hr), : will be inserted');
    lbl_departTime.addEventListener('click', function() {
        view.add(departTimeMeta);
        departTimeMeta.show();
    });  
    btn_nonSampTemp.addEventListener('click', function() {
        popupWin.add(nonSampTempSelect);
        popupWin.open();    
    });
    nonSampTempSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_nonSampTemp.value = e.rowData.rowValue;
        popupWin.remove(nonSampTempSelect);
        popupWin.close();
    });    
    btn_radioSampledY.addEventListener('click',function() {
        switchRadioButton(btn_radioSampledY);
        if (btn_radioSampledY.state === true) {
            if (btn_radioSampledN.state === true) {
                switchRadioButton(btn_radioSampledN);
            }
            btn_sampleable.enabled = true;
            tf_sampleable.enabled = true;
            tf_arrivalTime.enabled = true;
            tf_departTime.enabled = true;
            btn_nonSampPerm.enabled = false;
            tf_nonSampPerm.value = '';
            tf_nonSampPerm.enabled = false;
            btn_nonSampTemp.enabled = false;
            tf_nonSampTemp.value = '';
            tf_nonSampTemp.enabled = false;
        }
    });
    btn_radioSampledN.addEventListener('click',function() {
        switchRadioButton(btn_radioSampledN);
        if (btn_radioSampledN.state === true) {
            if (btn_radioSampledY.state === true) {
                switchRadioButton(btn_radioSampledY);
            }
            btn_sampleable.enabled = false;
            tf_sampleable.value = '';
            tf_sampleable.enabled = false;
            tf_arrivalTime.value = '';
            tf_arrivalTime.enabled = false;
            tf_departTime.value = '';
            tf_departTime.enabled = false;
            btn_nonSampPerm.enabled = true;
            tf_nonSampPerm.enabled = true;
            btn_nonSampTemp.enabled = true;
            tf_nonSampTemp.enabled = true;
        }
    });    
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    hdr_verification = setHeader('VERIFICATION INFORMATION',currentTop);
    scrollView.add(hdr_verification);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    lbl_verified = setLabel('Site verified by (select all that apply):',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(lbl_verified);    

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    btn_gps = setRadioButton(elementTop,f.colIndent,false);
    lbl_gps = setLabel('GPS',currentTop,f.colIndent + 50,f.colWidth3 - 50);
    btn_local = setRadioButton(elementTop,f.leftCol3_2,false);
    lbl_local = setLabel('Local Contact',currentTop,f.leftCol3_2 + 50,f.colWidth3 - 50);
    btn_signs = setRadioButton(elementTop,f.leftCol3_3,false);
    lbl_signs = setLabel('Signs',currentTop,f.leftCol3_3 + 50,f.colWidth3 - 50);
    scrollView.add(btn_gps);    
    scrollView.add(lbl_gps);    
    scrollView.add(btn_local);    
    scrollView.add(lbl_local);    
    scrollView.add(btn_signs);    
    scrollView.add(lbl_signs);    

    btn_gps.addEventListener('click',function() {
        switchRadioButton(btn_gps);
    });    
    btn_local.addEventListener('click',function() {
        switchRadioButton(btn_local);
    });    
    btn_signs.addEventListener('click',function() {
        switchRadioButton(btn_signs);
    });    

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    btn_roads = setRadioButton(elementTop,f.colIndent,false);
    lbl_roads = setLabel('Roads',currentTop,f.colIndent + 50,f.colWidth3 - 50);
    btn_topo = setRadioButton(elementTop,f.leftCol3_2,false);
    lbl_topo = setLabel('Map/Chart',currentTop,f.leftCol3_2 + 50,f.colWidth3 - 50);
    scrollView.add(btn_roads);    
    scrollView.add(lbl_roads);    
    scrollView.add(btn_topo);    
    scrollView.add(lbl_topo);    

    btn_roads.addEventListener('click',function() {
        switchRadioButton(btn_roads);
    });    
    btn_topo.addEventListener('click',function() {
        switchRadioButton(btn_topo);
    });    

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    btn_other = setRadioButton(elementTop,f.colIndent,false);
    lbl_other = setLabel('Other (Describe here):',currentTop,f.colIndent + 50,f.colWidth2 - 50, false);
    tf_other = setTextField('',elementTop,f.leftCol2_2,f.colWidth2);
    scrollView.add(btn_other);
    scrollView.add(lbl_other);
    scrollView.add(tf_other);

    btn_other.addEventListener('click',function() {
        switchRadioButton(btn_other);
    });    

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    btn_notVerified = setRadioButton(elementTop,f.colIndent,false);
    lbl_notVerified = setLabel('Not Verified (explain in comments)',currentTop,f.colIndent + 50,f.colWidth1);
    scrollView.add(btn_notVerified);
    scrollView.add(lbl_notVerified);

    btn_notVerified.addEventListener('click',function() {
        switchRadioButton(btn_notVerified);
    });    

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    hdr_location = setHeader('LOCATION',currentTop);
    scrollView.add(hdr_location);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    lbl_coords = setLabel('Coordinates (Decimal Degrees - NAD 83), Y-LOCATION',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(lbl_coords);    

    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    btn_fillGPS = setBlueButton('Fill Lat/Lon With Design Lat/Lon',currentTop,f.colIndent,f.colWidth1,60);
    scrollView.add(btn_fillGPS);
    
    currentTop += f.otherSpace + 20;
    elementTop += f.otherSpace + 20;
    
    lbl_lat = setLabelI('Latitude:',currentTop,f.colIndent,f.colWidth4);
    lbl_lat.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_lat = setTextFieldNumber('',elementTop,f.leftCol4_2,f.colWidth4,'XX.XXXXXX');
    lbl_long = setLabelI('Longitude:',currentTop,f.leftCol4_3,f.colWidth4);
    lbl_long.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_long = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'XXX.XXXXXX');
    scrollView.add(lbl_lat);  
    scrollView.add(tf_lat);  
    scrollView.add(lbl_long);  
    scrollView.add(tf_long);  

    var latMeta = setMetaView('Enter numeric latitude, decimal will be inserted');
    lbl_lat.addEventListener('click', function() {
        view.add(latMeta);
        latMeta.show();
    });
    var longMeta = setMetaView('Enter numeric longitude, decimal and (-) will be inserted');
    lbl_long.addEventListener('click', function() {
    view.add(longMeta);
    longMeta.show();
    });
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fix = setLabel('# Satellites:',currentTop,f.colIndent,f.colWidth4);
    lbl_fix.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_fix = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth,'select');
    tf_fix.editable = false;
    fixData = ['3','<=3','4','>=4'];
    fixSelect = setSelectTableView2(fixData);
    btn_fix = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
//this is an active validation (no data collected question)
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    lbl_37m = setRedLabel('(REQUIRED) Confirm Y-LOCATION is w/i 37m of X_SITE:',currentTop,f.colIndent,f.colWidth2);
    lbl_37m.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    btn_37m = setRadioButton(elementTop,f.leftCol4_3 ,false);
    lbl_good = setLabel('Good work, continue',currentTop, f.leftCol3_3, f.colWidth3);
    lbl_bad = setLabel('You must confirm to continue',currentTop, f.leftCol3_3, f.colWidth3);
    scrollView.add(lbl_fix);
    scrollView.add(tf_fix);
    scrollView.add(btn_fix);
    scrollView.add(lbl_37m);
    scrollView.add(btn_37m);

    btn_fillGPS.addEventListener('click',function() {
        tf_lat.value = lbl_siteLat.text;
        tf_long.value = lbl_siteLong.text;
    });
    btn_fix.addEventListener('click', function() {
        popupWin.add(fixSelect);
        popupWin.open();    
    });
    fixSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_fix.value = e.rowData.rowValue;
        popupWin.remove(fixSelect);
        popupWin.close();
    });
 
    btn_37m.addEventListener('click',function() {
        switchRadioButton(btn_37m);
        if (btn_37m.state === true) {          
            scrollView.add(lbl_good);
            scrollView.remove(lbl_bad);   
        }
        if (btn_37m.state === false) {
            scrollView.add(lbl_bad);
            scrollView.remove(lbl_good);
        }
        
    });  
    
    currentTop += f.otherSpace +20;
    elementTop += f.otherSpace +20;
    
    hdr_habitat = setHeader('HABITAT',currentTop);
    scrollView.add(hdr_habitat);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    lbl_habitat = setLabel('Habitat Type:',currentTop,f.colIndent,f.colWidth4);
    tf_habitatType = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth);
    tf_habitatType.editable = false;
    habitatTypeData = ['TIDAL','OPEN_WATER','MARSH_WETLAND','EMBAYMENT','INTER_TIDAL','RIVERMOUTH','OTHER'];
    habitatTypeSelect = setSelectTableView(habitatTypeData);
    btn_habitatType = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    tf_habitatOther = setTextFieldHint('',elementTop,f.leftCol4_3,f.colWidth4 + 20 + f.colWidth4,'Explain if "Other"');
    scrollView.add(lbl_habitat);
    scrollView.add(tf_habitatType);
    scrollView.add(btn_habitatType);
    scrollView.add(tf_habitatOther);
    
    btn_habitatType.addEventListener('click', function() {
        popupWin.add(habitatTypeSelect);
        popupWin.open();    
    });
    habitatTypeSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_habitatType.value = e.rowData.rowValue;
        popupWin.remove(habitatTypeSelect);
        popupWin.close();
    });

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    lbl_bottom = setLabel('Bottom Type:',currentTop,f.colIndent,f.colWidth4);
    tf_bottomType = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth);
    tf_bottomType.editable = false;
    bottomTypeData = ['CORAL','OYSTER_BED','GRASS_BED','SAND','ROCKY','HARDPAN','MUD','OTHER'];
    bottomTypeSelect = setSelectTableView(bottomTypeData);
    btn_bottomType = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    tf_bottomOther = setTextFieldHint('',elementTop,f.leftCol4_3,f.colWidth4 + 20 + f.colWidth4,'Explain if "Other"');
    scrollView.add(lbl_bottom);
    scrollView.add(tf_bottomType);
    scrollView.add(btn_bottomType);
    scrollView.add(tf_bottomOther);

    btn_bottomType.addEventListener('click', function() {
        popupWin.add(bottomTypeSelect);
        popupWin.open();    
    });
    bottomTypeSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_bottomType.value = e.rowData.rowValue;
        popupWin.remove(bottomTypeSelect);
        popupWin.close();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    lbl_debris = setLabel('Debris present?',elementTop - 10,f.colIndent,f.colWidth4);
    lbl_debris.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_debris = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth,'Y/N');
    tf_debris.editable = false;
    debrisData = ['Y','N'];
    debrisSelect = setSelectTableView(debrisData);
    btn_debris = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_debrisType = setLabel('If yes, TYPE:',currentTop,f.leftCol4_3,f.colWidth4);
    lbl_debrisType.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_debrisType = setTextField('',elementTop,f.leftCol4_4,f.colWidth4 - f.buttonWidth);
    tf_debrisType.editable = false;
    debrisTypeData = ['GLASS','PLASTIC','WOOD','CANS','OTHER'];
    debrisTypeSelect = setSelectTableView(debrisTypeData);
    btn_debrisType = setDropdownButton(elementTop,f.leftCol4_4 + f.colWidth4 - f.buttonWidth);
    scrollView.add(lbl_debris);
    scrollView.add(tf_debris);
    scrollView.add(btn_debris);
    scrollView.add(lbl_debrisType);
    scrollView.add(tf_debrisType);
    scrollView.add(btn_debrisType);

    btn_debris.addEventListener('click', function() {
        popupWin.add(debrisSelect);
        popupWin.open();    
    });
    debrisSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_debris.value = e.rowData.rowValue;
        popupWin.remove(debrisSelect);
        popupWin.close();
    });
    btn_debrisType.addEventListener('click', function() {
        popupWin.add(debrisTypeSelect);
        popupWin.open();    
    });
    debrisTypeSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_debrisType.value = e.rowData.rowValue;
        popupWin.remove(debrisTypeSelect);
        popupWin.close();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_debrisOther = setLabel('If Other, explain:',currentTop,f.colIndent,f.colWidth2);
    lbl_debrisOther.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_debrisOther = setTextField('',elementTop,f.leftCol2_2,f.colWidth2);
    scrollView.add(lbl_debrisOther);
    scrollView.add(tf_debrisOther);  

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    lbl_sav = setLabel('SAV present?',currentTop,f.colIndent,f.colWidth4);
    lbl_sav.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_sav = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth,'Y/N');
    tf_sav.editable = false;
    savData = ['Y','N'];
    savSelect = setSelectTableView(savData);
    btn_sav = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_savAbundance = setLabel('Abundance:',currentTop,f.leftCol4_3,f.colWidth4);
    lbl_savAbundance.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_savAbundance = setTextFieldHint('',elementTop,f.leftCol4_4,f.colWidth4,'Sparse, dense, etc.');
    scrollView.add(lbl_sav);
    scrollView.add(tf_sav);
    scrollView.add(btn_sav);
    scrollView.add(lbl_savAbundance);
    scrollView.add(tf_savAbundance);
    
    btn_sav.addEventListener('click', function() {
        popupWin.add(savSelect);
        popupWin.open();    
    });
    savSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_sav.value = e.rowData.rowValue;
        popupWin.remove(savSelect);
        popupWin.close();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    lbl_macro = setLabel('Macroalgae present?',elementTop - 10,f.colIndent,f.colWidth4);
    lbl_macro.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_macro = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth,'Y/N');
    tf_macro.editable = false;
    macroData = ['Y','N'];
    macroSelect = setSelectTableView(macroData);
    btn_macro = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_macroAbundance = setLabel('Abundance:',currentTop,f.leftCol4_3,f.colWidth4);
    lbl_macroAbundance.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_macroAbundance = setTextFieldHint('',elementTop,f.leftCol4_4,f.colWidth4,'Sparse, dense, etc.');
    scrollView.add(lbl_macro);
    scrollView.add(tf_macro);
    scrollView.add(btn_macro);
    scrollView.add(lbl_macroAbundance);
    scrollView.add(tf_macroAbundance);

    btn_macro.addEventListener('click', function() {
        popupWin.add(macroSelect);
        popupWin.open();    
    });
    macroSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_macro.value = e.rowData.rowValue;
        popupWin.remove(macroSelect);
        popupWin.close();
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    hdr_comments = setHeader('COMMENTS',currentTop);
    scrollView.add(hdr_comments);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_genComments = setLabel('General comments:',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(lbl_genComments);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;  

    ta_genComments = setTextArea('',currentTop,f.colIndent,f.colWidth1,100);
    scrollView.add(ta_genComments);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    lbl_directions = setLabel('Directions to site:',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(lbl_directions);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;  

    ta_directions = setTextArea('',currentTop,f.colIndent,f.colWidth1,100);
    scrollView.add(ta_directions);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;  

    hdr_crew = setHeader('CREW',currentTop);
    scrollView.add(hdr_crew);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_leader = setLabel('Crew leader:',currentTop,f.colIndent,f.colWidth3);
    lbl_leader.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_leader = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_leader);
    scrollView.add(tf_leader);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_taxonomist = setLabel('Fish taxonomist:',currentTop,f.colIndent,f.colWidth3);
    lbl_taxonomist.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_taxonomist = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_taxonomist);
    scrollView.add(tf_taxonomist);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew1 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew1.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew1 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew1);
    scrollView.add(tf_crew1);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew2 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew2.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew2 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew2);
    scrollView.add(tf_crew2);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew3 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew3.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew3 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew3);
    scrollView.add(tf_crew3);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew4 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew4.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew4 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew4);
    scrollView.add(tf_crew4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew5 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew5.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew5 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew5);
    scrollView.add(tf_crew5);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_crew6 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_crew6.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_crew6 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    scrollView.add(lbl_crew6);
    scrollView.add(tf_crew6);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    view.add(scrollView);
  
    //events
    //text field mask for value formatting 
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
 
    btn_date.addEventListener('click', function() {
          pickerWin.open();
    });
    picker.addEventListener('change',function(e){
        tf_date.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear();
    });
    pickerButton.addEventListener('click',function(){
         pickerWin.close();  
    });
    tf_date.addEventListener(eventListener, function() {
          tf_date.value = entryMask(tf_date.value,'date');
    });   
    tf_arrivalTime.addEventListener(eventListener, function() {
        tf_arrivalTime.value = entryMask(tf_arrivalTime.value,'time');
    });
    tf_departTime.addEventListener(eventListener, function() {
        tf_departTime.value = entryMask(tf_departTime.value,'time');
    });      
    tf_lat.addEventListener(eventListener, function() {
        tf_lat.value = entryMask(tf_lat.value,'lat');
    });
    tf_long.addEventListener(eventListener, function() {
        tf_long.value = entryMask(tf_long.value,'lon');
    });
    tf_depth.addEventListener(eventListener, function() {
        tf_depth.value = entryMask(tf_depth.value,'tens');
    });
 
    btn_update.addEventListener('click', function() {
        formSiteDict['SITE_ID'] = view.siteid;
        formSiteDict['VISIT_NO'] = view.visitno;
        formSiteDict['STATE'] = view.state;
        formSiteDict['LOC_NAME'] = tf_siteName.value;
        formSiteDict['CREW'] = tf_crew.value;
        formSiteDict['DATE_COL'] = tf_date.value;
        formSiteDict['STATION_DEPTH'] = tf_depth.value;
        if (btn_radioSampledY.state === true) {
            formSiteDict['SITESAMP'] = 'Y';
            formSiteDict['XSTATUS'] = 'SAMPLEABLE';
            formSiteDict['VALXSITE'] = tf_sampleable.value;
        }
        if (btn_radioSampledY.state === false) {
            formSiteDict['SITESAMP'] = 'N';
            if (tf_nonSampPerm.value !== '') {
                formSiteDict['XSTATUS'] = 'NONSAMPPERM';
                formSiteDict['VALXSITE'] = tf_nonSampPerm.value;
            }
            if (tf_nonSampTemp.value !== '') {
                formSiteDict['XSTATUS'] = 'NONSAMPTEMP';
                formSiteDict['VALXSITE'] = tf_nonSampTemp.value;
            }
        }
        formSiteDict['ARRIVE'] = tf_arrivalTime.value;
        formSiteDict['LEAVE'] = tf_departTime.value;
        if (btn_gps.state) {formSiteDict['GPS_VER'] = 'Y';} else {formSiteDict['GPS_VER'] = 'N';}
        if (btn_local.state) {formSiteDict['LOC_VER'] = 'Y';} else {formSiteDict['LOC_VER'] = 'N';}
        if (btn_signs.state) {formSiteDict['SIG_VER'] = 'Y';} else {formSiteDict['SIG_VER'] = 'N';}
        if (btn_roads.state) {formSiteDict['RDS_VER'] = 'Y';} else {formSiteDict['RDS_VER'] = 'N';}
        if (btn_topo.state) {formSiteDict['TOP_VER'] = 'Y';} else {formSiteDict['TOP_VER'] = 'N';}
        if (btn_other.state) {formSiteDict['OTHER_VER'] = tf_other.value;} else {formSiteDict['OTHER_VER'] = 'N';}
        if (btn_notVerified.state) {formSiteDict['NOT_VER'] = 'Y';} else {formSiteDict['NOT_VER'] = 'N';}
        formSiteDict['LAT_DD'] = tf_lat.value;
        formSiteDict['LON_DD'] = tf_long.value;
        formSiteDict['XDIM'] = tf_fix.value;
        if (btn_37m.state) {formSiteDict['XSITE'] = 'Y';} else {formSiteDict['XSITE'] = 'N';}
        
        if (tf_habitatType.value === 'OTHER') {
            formSiteDict['HABITAT'] = tf_habitatOther.value;
        } else {
            formSiteDict['HABITAT'] = tf_habitatType.value;
        }
        if (tf_bottomType.value === 'OTHER') {
            formSiteDict['BOTTOM_TYPE'] = tf_bottomOther.value;
        } else {
            formSiteDict['BOTTOM_TYPE'] = tf_bottomType.value;
        }
        formSiteDict['MARINE_DEBRIS'] = tf_debris.value;
        if (tf_debris.value === 'Y') {formSiteDict['MARINE_DEBRIS_TYPE'] = tf_debrisType.value;}
        formSiteDict['SAV'] = tf_sav.value;
        formSiteDict['SAV_ABUNDANCE'] = tf_savAbundance.value;
        formSiteDict['MACROALGAE'] = tf_macro.value;
        formSiteDict['MACRO_ABUNDANCE'] = tf_macroAbundance.value;
        formSiteDict['GEN_COM'] = ta_genComments.value;
        formSiteDict['DRCTNS'] = ta_directions.value;
        formSiteDict['CREW_LEADER'] = tf_leader.value;
        formSiteDict['FISH_TAXONOMIST'] = tf_taxonomist.value;
        formSiteDict['NAME1'] = tf_crew1.value;
        formSiteDict['NAME2'] = tf_crew2.value;
        formSiteDict['NAME3'] = tf_crew3.value;
        formSiteDict['NAME4'] = tf_crew4.value;
        formSiteDict['NAME5'] = tf_crew5.value;
        formSiteDict['NAME6'] = tf_crew6.value;
        
        saveJSON(formSiteDict,view.uid + '_SITEVERIFICATION.json');
        
        view.fireEvent('siteTypeUpdated', {
            siteid:view.siteid,
            visitno:view.visitno,
        });
    });
    view.addEventListener("updateFormSite",function(e){
        //reset dictionary
        formSiteDict = openFormSiteDict();
        formSiteDict['SITE_ID'] = e.siteid;
        formSiteDict['VISIT_NO'] = e.visitno;
        //formSiteDict['STATE'] = e.state;
        view.siteid = e.siteid;
        view.visitno = e.visitno;
        view.uid = e.siteid + '_' + e.visitno;
        view.state = e.state;
        
        retrieveJSON(formSiteDict,view.uid + '_SITEVERIFICATION.json');
        //populate values from json-populated dictionary
        lbl_siteNameD.text = e.siteid;
        lbl_siteLat.text = e.siteLat;
        lbl_siteLong.text = e.siteLong;
        if (e.siteLat === 'Not Available'){
            btn_fillGPS.enabled = false;
        } else {
            btn_fillGPS.enabled = true;
        }
        tf_siteName.value = formSiteDict['LOC_NAME'];
        //formSiteDict['STATE'];
        tf_crew.value = formSiteDict['CREW'];
        tf_date.value = formSiteDict['DATE_COL'];
        tf_depth.value = formSiteDict['STATION_DEPTH'];
        if (formSiteDict['SITESAMP'] === '') {
            if (btn_radioSampledY.state === true) {
                changeStateRadioButton(btn_radioSampledY,false);
            }
            if (btn_radioSampledN.state === true) {
                changeStateRadioButton(btn_radioSampledN,false);
            }
            tf_sampleable.enabled = false;
            tf_sampleable.value = '';
            tf_arrivalTime.enabled = false;
            tf_arrivalTime.value = '';
            tf_departTime.enabled = false;
            tf_departTime.value = '';
            btn_nonSampPerm.enabled = false;
            tf_nonSampPerm.enabled = false;
            tf_nonSampPerm.value = '';
            btn_nonSampTemp.enabled = false;
            tf_nonSampTemp.enabled = false;
            tf_nonSampTemp.value = '';
        }
        if (formSiteDict['SITESAMP'] === 'Y') {
            if (btn_radioSampledY.state === false) {
                changeStateRadioButton (btn_radioSampledY,true);
            }
            if (btn_radioSampledN.state === true) {
                changeStateRadioButton (btn_radioSampledY,false);
            }
            if (formSiteDict['VALXSITE'] === 'MARINE' || formSiteDict['VALXSITE'] === 'GREAT_LAKES') {
                tf_sampleable.value = formSiteDict['VALXSITE'];
            }
            tf_arrivalTime.value = formSiteDict['ARRIVE'];
            tf_departTime.value = formSiteDict['LEAVE'];
            btn_sampleable.enabled = true;
            tf_sampleable.enabled = true;
            tf_arrivalTime.enabled = true;
            tf_departTime.enabled = true;            
        } else {
            changeStateRadioButton (btn_radioSampledY,false);
            btn_sampleable.enabled = false;
            tf_sampleable.enabled = false;
            tf_arrivalTime.enabled = false;
            tf_departTime.enabled = false;
        }
        if (formSiteDict['SITESAMP'] === 'N') {
            if (btn_radioSampledY.state === true) {
                changeStateRadioButton (btn_radioSampledY,false);
            }
            if (btn_radioSampledN.state === false) {
                changeStateRadioButton (btn_radioSampledY,true);
            }
            if (formSiteDict['VALXSITE'] === 'NOACCESS' ||formSiteDict['VALXSITE'] === 'MAP_ERROR' || formSiteDict['VALXSITE'] === 'SHALLOW' || formSiteDict['VALXSITE'] === 'UNSAFE') {
                tf_nonSampPerm.value = formSiteDict['VALXSITE'];
            } else if (formSiteDict['VALXSITE'] === 'INACCTEMP' || formSiteDict['VALXSITE'] === 'OTHER_NST') {
                tf_nonSampTemp.value = formSiteDict['VALXSITE'];
            }
            btn_nonSampPerm.enabled = true;
            tf_nonSampPerm.enabled = true;
            btn_nonSampTemp.enabled = true;
            tf_nonSampTemp.enabled = true;
        } else {
            changeStateRadioButton (btn_radioSampledN,false);
            btn_nonSampPerm.enabled = false;
            tf_nonSampPerm.enabled = false;
            btn_nonSampTemp.enabled = false;
            tf_nonSampTemp.enabled = false;
        }
        
        if (formSiteDict['GPS_VER'] === 'Y') {
            changeStateRadioButton (btn_gps,true);
        } else {
            changeStateRadioButton (btn_gps,false);
        }
        if (formSiteDict['LOC_VER'] === 'Y') {
            changeStateRadioButton (btn_local,true);
        } else {
            changeStateRadioButton (btn_local,false);
        }
        if (formSiteDict['SIG_VER'] === 'Y') {
            changeStateRadioButton (btn_signs,true);
        } else {
            changeStateRadioButton (btn_signs,false);
        }
        if (formSiteDict['RDS_VER'] === 'Y') {
            changeStateRadioButton (btn_roads,true);
        } else {
            changeStateRadioButton (btn_roads,false);
        }
        if (formSiteDict['TOP_VER'] === 'Y') {
            changeStateRadioButton (btn_topo,true);
        } else {
            changeStateRadioButton (btn_topo,false);
        }
        if ((formSiteDict['OTHER_VER'] !== 'N') && (formSiteDict['OTHER_VER'] !== '')) {
            changeStateRadioButton (btn_other,true);
            tf_other.value = formSiteDict['OTHER_VER'];
        } else {
            changeStateRadioButton (btn_other,false);
        }
        if (formSiteDict['NOT_VER'] === 'Y') {
            changeStateRadioButton (btn_notVerified,true);
        } else {
            changeStateRadioButton (btn_notVerified,false);
        }
        tf_lat.value = formSiteDict['LAT_DD'];
        tf_long.value = formSiteDict['LON_DD'];
        tf_fix.value = formSiteDict['XDIM'];
        if (formSiteDict['XSITE'] === 'Y') {
            changeStateRadioButton (btn_37m,true);
        } else {
            changeStateRadioButton (btn_37m,false);
        }
        if (formSiteDict['HABITAT'] === 'EMBAYMENT' || formSiteDict['HABITAT'] === 'INTER_TIDAL' || 
        formSiteDict['HABITAT'] === 'MARSH_WETLAND' || formSiteDict['HABITAT'] === 'OPEN_WATER' || 
        formSiteDict['HABITAT'] === 'RIVERMOUTH' || formSiteDict['HABITAT'] === 'TIDAL') {
            tf_habitatType.value = formSiteDict['HABITAT'];
        } else if (formSiteDict['HABITAT'] !== '') {
            tf_habitatType.value = 'OTHER';
            tf_habitatOther.value = formSiteDict['HABITAT'];
        } else {
            tf_habitatType.value = '';
            tf_habitatOther.value = '';
        }
        if (formSiteDict['BOTTOM_TYPE'] === 'CORAL' || formSiteDict['BOTTOM_TYPE'] === 'GRASS_BED' || 
        formSiteDict['BOTTOM_TYPE'] === 'HARDPAN' || formSiteDict['BOTTOM_TYPE'] === 'MUD' || 
        formSiteDict['BOTTOM_TYPE'] === 'OYSTER_BED' || formSiteDict['BOTTOM_TYPE'] === 'ROCKY' ||
        formSiteDict['BOTTOM_TYPE'] === 'SAND') {
            tf_bottomType.value = formSiteDict['BOTTOM_TYPE'];
        } else if (formSiteDict['BOTTOM_TYPE'] !== '') {
            tf_bottomType.value = 'OTHER';
            tf_bottomOther.value = formSiteDict['BOTTOM_TYPE'];
        } else {
            tf_bottomType.value = '';
            tf_bottomOther.value = '';
        }
        tf_debris.value = formSiteDict['MARINE_DEBRIS'];
        if (formSiteDict['MARINE_DEBRIS_TYPE'] === 'CANS' || formSiteDict['MARINE_DEBRIS_TYPE'] === 'GLASS' || 
        formSiteDict['MARINE_DEBRIS_TYPE'] === 'PLASTIC' || formSiteDict['MARINE_DEBRIS_TYPE'] === 'WOOD') {
            tf_debrisType.value = formSiteDict['MARINE_DEBRIS_TYPE'];
        } else if (formSiteDict['MARINE_DEBRIS_TYPE'] !== '') {
            tf_debrisType.value = 'OTHER';
            tf_debrisOther.value = formSiteDict['MARINE_DEBRIS_TYPE'];
        } else {
            tf_debrisType.value = '';
            tf_debrisOther.value = '';
        }
        tf_sav.value = formSiteDict['SAV'];
        tf_savAbundance.value = formSiteDict['SAV_ABUNDANCE'];
        tf_macro.value = formSiteDict['MACROALGAE'];
        tf_macroAbundance.value = formSiteDict['MACRO_ABUNDANCE'];
        ta_genComments.value = formSiteDict['GEN_COM'];
        ta_directions.value = formSiteDict['DRCTNS'];
        tf_leader.value = formSiteDict['CREW_LEADER'];
        tf_taxonomist.value = formSiteDict['FISH_TAXONOMIST'];
        tf_crew1.value = formSiteDict['NAME1'];
        tf_crew2.value = formSiteDict['NAME2'];
        tf_crew3.value = formSiteDict['NAME3'];
        tf_crew4.value = formSiteDict['NAME4'];
        tf_crew5.value = formSiteDict['NAME5'];
        tf_crew6.value = formSiteDict['NAME6'];
    });
    
    return view;
}

function setView_formField(){
    var f = formatValues();
    var formFieldDict = openFormFieldDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();
 
    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
  
    hdr_calibration = setHeader('CALIBRATION INFORMATION',currentTop);
    scrollView.add(hdr_calibration);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
      
    var lbl_calModel = setLabel('Instrument Model:',currentTop,f.colIndent,f.colWidth3);
    var lbl_calID = setLabel('Instrument ID:',currentTop,f.leftCol3_2,f.colWidth3); 
    var lbl_calOper = setLabel('Operator:',currentTop,f.leftCol3_3,f.colWidth3); 
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
       
    var tf_calModel = setTextField('',elementTop,f.colIndent,f.colWidth3); 
    var tf_calID = setTextField('',elementTop,f.leftCol3_2,f.colWidth3);
    var tf_calOper = setTextField('',elementTop,f.leftCol3_3,f.colWidth3);
        
    scrollView.add(lbl_calModel);
    scrollView.add(lbl_calID);
    scrollView.add(lbl_calOper);
    scrollView.add(tf_calModel);
    scrollView.add(tf_calID);
    scrollView.add(tf_calOper);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
//temperature section

    var spacerTemp = setSpacer(currentTop,f.colIndent,f.colWidth1);
    scrollView.add(spacerTemp);

    currentTop += 20;
    elementTop += 20;
    
    var lbl_temp = setBlueLabel('TEMPERATURE',currentTop,f.colIndent,f.colWidth1); 
    lbl_temp.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_temp);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_tempRead = setLabel('Thermometer Reading (C):',currentTop,f.colIndent,f.colWidth2); 
    lbl_tempRead.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_tempRead = setTextFieldNumber('',elementTop,f.leftCol2_2,f.colWidth4,'xx.x'); 
    scrollView.add(lbl_tempRead);
    scrollView.add(tf_tempRead);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sensRead = setLabel('Sensor Reading (C):',currentTop,f.colIndent,f.colWidth2);    
    lbl_sensRead.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_sensRead = setTextFieldNumber('',elementTop,f.leftCol2_2,f.colWidth4,'xx.x');
    scrollView.add(lbl_sensRead);
    scrollView.add(tf_sensRead);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_tempCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4);     
    var tf_tempCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
    scrollView.add(lbl_tempCom);
    scrollView.add(tf_tempCom);
        
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
 //do section
    
    var spacerDo = setSpacer(currentTop,f.colIndent,f.colWidth1);
    scrollView.add(spacerDo);

    currentTop += 20;
    elementTop += 20;
    
    var lbl_do = setBlueLabel('DO',currentTop,f.colIndent,f.colWidth1); 
    lbl_do.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;   
    scrollView.add(lbl_do);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_baro = setLabel('Barometric Pressure:',currentTop,f.colIndent,f.colWidth2);
    lbl_baro.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;   
    var tf_baro = setTextFieldNumber('',elementTop,f.leftCol4_3,f.colWidth4,'mm Hg');
    scrollView.add (lbl_baro);
    scrollView.add (tf_baro);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_calUnitM = setLabel('mg/L',currentTop,(f.leftCol4_4+15),60);
    lbl_calUnitP = setLabel('%',currentTop,(f.leftCol4_4+90),50);
    scrollView.add (lbl_calUnitM);
    scrollView.add (lbl_calUnitP);
      
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var lbl_cal = setLabel('Calibration Value:',currentTop,f.colIndent,f.colWidth2);
    lbl_cal.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;   
    var tf_cal = setTextFieldNumber('',elementTop,f.leftCol4_3,f.colWidth4,'xxx.x');
    var btn_radiom1 = setRadioButton(elementTop,(f.leftCol4_4+20),false);
    var btn_radiop1 = setRadioButton(elementTop,(f.leftCol4_4+80),false);
    scrollView.add (lbl_cal);
    scrollView.add (tf_cal);
    scrollView.add (btn_radiom1);
    scrollView.add (btn_radiop1);
    
    btn_radiom1.addEventListener('click',function() {
        switchRadioButton(btn_radiom1);
        if (btn_radiom1.state === true) {
            if (btn_radiop1.state === true) {
                switchRadioButton(btn_radiop1);
            }
        }
    });
    btn_radiop1.addEventListener('click',function() {
        switchRadioButton(btn_radiop1);
        if (btn_radiop1.state === true) {
            if (btn_radiom1.state === true) {
                switchRadioButton(btn_radiom1);
            }
        }
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var lbl_disp = setLabel('Displayed Value:',currentTop,f.colIndent,f.colWidth2);
    lbl_disp.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;   
    var tf_disp = setTextFieldNumber('',elementTop,f.leftCol4_3, f.colWidth4,'xxx.x');
    var btn_radiom2 = setRadioButton(elementTop,(f.leftCol4_4+20),false);
    var btn_radiop2 = setRadioButton(elementTop,(f.leftCol4_4+80),false);
    scrollView.add (lbl_disp);
    scrollView.add (tf_disp);
    scrollView.add (btn_radiom2);
    scrollView.add (btn_radiop2);
    
    btn_radiom2.addEventListener('click',function() {
        switchRadioButton(btn_radiom2);
        if (btn_radiom2.state === true) {
            if (btn_radiop2.state === true) {
                switchRadioButton(btn_radiop2);
            }
        }
    });
    btn_radiop2.addEventListener('click',function() {
        switchRadioButton(btn_radiop2);
        if (btn_radiop2.state === true) {
            if (btn_radiom2.state === true) {
                switchRadioButton(btn_radiom2);
            }
        }
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_doCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4); 
    var tf_doCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
   
    scrollView.add (lbl_doCom);
    scrollView.add (tf_doCom);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
//ph section
     
    var spacerPh = setSpacer(currentTop,f.colIndent,f.colWidth1);
    scrollView.add(spacerPh);
    
    currentTop += 20;
    elementTop += 20;
    
    var lbl_ph = setBlueLabel('pH',currentTop,f.colIndent,f.colWidth1);
    lbl_ph.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;   
    scrollView.add(lbl_ph);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_phStd1Desc = setLabel('Description',currentTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    lbl_phStd1Desc.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER; 
    var lbl_phStd1Value = setLabel('Value',currentTop,f.leftCol4_4,f.colWidth4);
    lbl_phStd1Value.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER; 
    scrollView.add (lbl_phStd1Desc);
    scrollView.add (lbl_phStd1Value);
   
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
   
    var lbl_phStd1 = setLabel('pH STD 1:',currentTop,f.colIndent,f.colWidth4);
    var tf_phStd1Desc = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    var tf_phStd1Value = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xx.xx');
    scrollView.add (lbl_phStd1);
    scrollView.add(tf_phStd1Desc);
    scrollView.add(tf_phStd1Value);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_phStd2 = setLabel('pH STD 2:',currentTop,f.colIndent,f.colWidth4);
    var tf_phStd2Desc = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    var tf_phStd2Value = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xx.xx');
    scrollView.add (lbl_phStd2);
    scrollView.add(tf_phStd2Desc);
    scrollView.add(tf_phStd2Value);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_phCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4); 
    var tf_phCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
    scrollView.add(lbl_phCom);
    scrollView.add(tf_phCom);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
 //conductivity section
    var spacerCond = setSpacer(currentTop,f.colIndent,f.colWidth1);
    scrollView.add(spacerCond);
    
    currentTop += 20;
    elementTop += 20;
    
    var lbl_cond = setBlueLabel('Conductivity',currentTop,f.colIndent,f.colWidth1);
    lbl_cond.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;   
    scrollView.add(lbl_cond);

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_condStd1Desc = setLabel('Description',currentTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    lbl_condStd1Desc.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER; 
    var lbl_condStd1Value = setLabel('Value',currentTop,f.leftCol4_4,f.colWidth4);
    lbl_condStd1Value.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER; 
    scrollView.add (lbl_condStd1Desc);
    scrollView.add (lbl_condStd1Value);
   
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
   
    var lbl_condStd1 = setLabel('Cond. STD 1:',currentTop,f.colIndent,f.colWidth4);
    var tf_condStd1Desc = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    var tf_condStd1Value = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xxx.x');
    scrollView.add (lbl_condStd1);
    scrollView.add(tf_condStd1Desc);
    scrollView.add(tf_condStd1Value);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_condStd2 = setLabel('Cond. STD 2:',currentTop,f.colIndent,f.colWidth4);
    var tf_condStd2Desc = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 + 20 + f.colWidth4);
    var tf_condStd2Value = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xxx.x');
    scrollView.add (lbl_condStd2);
    scrollView.add(tf_condStd2Desc);
    scrollView.add(tf_condStd2Value);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_condCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4); 
    var tf_condCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
    scrollView.add(lbl_condCom);
    scrollView.add(tf_condCom);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    //QC check section
    
    hdr_qc = setHeader('QUALITY CONTROL CHECK',currentTop);
    scrollView.add(hdr_qc);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
      
    var lbl_qcCheck = setLabel('No QC Check this visit?',currentTop,f.colIndent,f.colWidth2);
    var btn_qcCheck = setRadioButton(elementTop,f.leftCol4_3,false);
    btn_qcCheck.addEventListener('click',function() {
        switchRadioButton(btn_qcCheck);
    });
    
    scrollView.add(lbl_qcCheck);
    scrollView.add(btn_qcCheck);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_intMeter = setLabel('Internal meter checks performed and passed?',currentTop,f.colIndent,f.colWidth2);
    var btn_intMeter = setRadioButton(elementTop,f.leftCol4_3,false);
    btn_intMeter.addEventListener('click',function() {
        switchRadioButton(btn_intMeter);
    });
    
    scrollView.add(lbl_intMeter);
    scrollView.add(btn_intMeter);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var pickerWin = setPopupWindow();
    var picker = Ti.UI.createPicker({
        useSpinner:true,
        type:Ti.UI.PICKER_TYPE_DATE,
        minDate:new Date(2015,03,01),
        maxDate:new Date(2015,10,31),
        value:new Date(2015,3,12),
        top:50      
    });
   
    var pickerButton = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'black',
        height:50,
        width:150,
        title:'Add date',
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:18,fontWeight:'bold'},
    });
   
    pickerWin.add(picker);
    pickerWin.add(pickerButton);
   
    var lbl_qcTime = setLabel('Time:',currentTop,f.colIndent,f.colWidth3); 
    var lbl_qcDatePrep = setLabel('Date Prepared:',currentTop,f.leftCol3_2,f.colWidth3); 
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var tf_qcTime = setTextFieldNumber('',elementTop,f.colIndent,f.colWidth3,'hhmm');    
    var tf_qcDatePrep = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'mmddyyyy');
    tf_qcDatePrep.editable = false;
    var btn_qcDatePrep = setDropdownButton(elementTop, f.leftCol3_3);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_qcCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4);  
    var tf_qcCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
    scrollView.add(lbl_qcTime);
    scrollView.add(tf_qcTime);
    scrollView.add(lbl_qcDatePrep);
    scrollView.add(tf_qcDatePrep);
    scrollView.add(btn_qcDatePrep);
    scrollView.add(lbl_qcCom);
    scrollView.add(tf_qcCom);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_qcParamExpected = setLabel('Parameter',currentTop,f.colIndent,f.colWidth4);
    var lbl_qcTempExpected = setLabel('Temp (C)',currentTop,f.leftCol4_2,f.colWidth4);
    lbl_qcTempExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    var lbl_qcphExpected = setLabel('pH',currentTop,f.leftCol4_3,f.colWidth4);
    lbl_qcphExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    var lbl_qcCondExpected = setLabel('Cond (us)',currentTop,f.leftCol4_4,f.colWidth4);
    lbl_qcCondExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_qcParamExpected);
    scrollView.add(lbl_qcTempExpected);
    scrollView.add(lbl_qcphExpected);
    scrollView.add(lbl_qcCondExpected);
  
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_qcParamExpected = setBlueLabel('Expected',currentTop,f.colIndent,f.colWidth4);
    var tf_qcphExpected = setTextFieldNumber('',elementTop,f.leftCol4_3,f.colWidth4,'xx.xx');
    var tf_qcCondExpected = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xxx.x');
    scrollView.add(lbl_qcParamExpected);
    scrollView.add(tf_qcphExpected);
    scrollView.add(tf_qcCondExpected);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_qcParamMeasured = setBlueLabel('Measured',currentTop,f.colIndent,f.colWidth4);
    var tf_qcTempMeasured = setTextFieldNumber('',elementTop,f.leftCol4_2,f.colWidth4,'xx.x');
    var tf_qcphMeasured = setTextFieldNumber('',elementTop,f.leftCol4_3,f.colWidth4,'xx.xx');
    var tf_qcCondMeasured = setTextFieldNumber('',elementTop,f.leftCol4_4,f.colWidth4,'xxx.x');
    scrollView.add(lbl_qcParamMeasured);
    scrollView.add(tf_qcTempMeasured);
    scrollView.add(tf_qcphMeasured);
    scrollView.add(tf_qcCondMeasured);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    hdr_post = setHeader('POST-MEASUREMENT CALIBRATION CHECK',currentTop);
    scrollView.add(hdr_post);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var lbl_postphExpected = setLabel('pH',currentTop,f.leftCol3_2,f.colWidth3);
    lbl_postphExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    var lbl_postCondExpected = setLabel('Cond (us)',currentTop,f.leftCol3_3,f.colWidth3);
    lbl_postCondExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_postphExpected);
    scrollView.add(lbl_postCondExpected);
  
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_postParamExpected = setBlueLabel('Expected',currentTop,f.colIndent,f.colWidth3);
    var tf_postphExpected = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'xx.xx');
    var tf_postCondExpected = setTextFieldNumber('',elementTop,f.leftCol3_3,f.colWidth3,'xxx.x');
    scrollView.add(lbl_postParamExpected);
    scrollView.add(tf_postphExpected);
    scrollView.add(tf_postCondExpected);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_postComExpected = setLabel('Comments:',currentTop,f.colIndent,f.colWidth3);
    lbl_postComExpected.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_postComExpected = setTextFieldHint('',elementTop,f.leftCol3_2,f.colWidth3 + 19 + f.colWidth3,'Enter comments');
    scrollView.add(lbl_postComExpected);
    scrollView.add(tf_postComExpected);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_postphMeasured = setLabel('pH',currentTop,f.leftCol3_2,f.colWidth3);
    lbl_postphMeasured.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    var lbl_postCondMeasured = setLabel('Cond (us)',currentTop,f.leftCol3_3,f.colWidth3);
    lbl_postCondMeasured.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_postphMeasured);
    scrollView.add(lbl_postCondMeasured);
  
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_postParamMeasured = setBlueLabel('Measured',currentTop,f.colIndent,f.colWidth3);
    var tf_postphMeasured = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'xx.xx');
    var tf_postCondMeasured = setTextFieldNumber('',elementTop,f.leftCol3_3,f.colWidth3,'xxx.x');
    scrollView.add (lbl_postParamMeasured);
    scrollView.add(tf_postphMeasured);
    scrollView.add(tf_postCondMeasured);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_postComMeasured = setLabel('Comments:',currentTop,f.colIndent,f.colWidth3);
    lbl_postComMeasured.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_postComMeasured = setTextFieldHint('',elementTop,f.leftCol3_2,f.colWidth3 + 19 + f.colWidth3,'Enter comments');
    scrollView.add(lbl_postComMeasured);
    scrollView.add(tf_postComMeasured);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    hdr_secchi = setHeader('SECCHI DEPTH (m)',currentTop);
    scrollView.add(hdr_secchi);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var lbl_secchiTime = setLabel('Time:',currentTop,f.colIndent,f.colWidth4);
    var tf_secchiTime = setTextFieldNumber('',elementTop,f.leftCol4_2-80,f.colWidth4,'hhmm');
    var lbl_secchiClear = setLabelI('Clear to bottom?',currentTop,f.leftCol4_3-60,f.colWidth4+60);
    var lbl_secchiClearY = setLabel('Y',currentTop,f.leftCol4_4,20);
    var btn_secchiClearY = setRadioButton(elementTop,f.leftCol4_4+20,false);
    var lbl_secchiClearN = setLabel('N',currentTop,f.leftCol4_4+70,20);
    var btn_secchiClearN = setRadioButton(elementTop,f.leftCol4_4+90,false);
    
    var secchiClearMeta = setMetaView('If Yes, record station depth as both disappearance and reappearance depth for Reading 1');
    lbl_secchiClear.addEventListener('click', function() {
        view.add(secchiClearMeta);
        secchiClearMeta.show();
    });
    
    btn_secchiClearY.addEventListener('click',function() {
        switchRadioButton(btn_secchiClearY);
        if (btn_secchiClearY.state === true) {
            if (btn_secchiClearN.state === true) {
                switchRadioButton(btn_secchiClearN);
            }
        }
    });
    btn_secchiClearN.addEventListener('click',function() {
        switchRadioButton(btn_secchiClearN);
        if (btn_secchiClearN.state === true) {
            if (btn_secchiClearY.state === true) {
                switchRadioButton(btn_secchiClearY);
            }
        }
    });
    scrollView.add(lbl_secchiTime);
    scrollView.add(tf_secchiTime);
    scrollView.add(lbl_secchiClear);
    scrollView.add(lbl_secchiClearY);
    scrollView.add(btn_secchiClearY);
    scrollView.add(lbl_secchiClearN);
    scrollView.add(btn_secchiClearN);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var lbl_secchiDisappear = setLabel('Disappears:',currentTop,f.leftCol3_2,f.colWidth3);
    lbl_secchiDisappear.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    var lbl_secchiReappear = setLabel('Reappears:',currentTop,f.leftCol3_3,f.colWidth3);
    lbl_secchiReappear.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_secchiDisappear);
    scrollView.add(lbl_secchiReappear);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
    
    var lbl_secchiRead1 = setLabel('Reading 1:',currentTop,f.colIndent,f.colWidth3);
    lbl_secchiRead1.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_secchiRead1D = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'xx.x');
    var tf_secchiRead1R = setTextFieldNumber('',elementTop,f.leftCol3_3,f.colWidth3,'xx.x');
    scrollView.add(lbl_secchiRead1);
    scrollView.add(tf_secchiRead1D);
    scrollView.add(tf_secchiRead1R);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var lbl_secchiRead2 = setLabel('Reading 2:',currentTop,f.colIndent,f.colWidth3);
    lbl_secchiRead2.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_secchiRead2D = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'xx.x');
    var tf_secchiRead2R = setTextFieldNumber('',elementTop,f.leftCol3_3,f.colWidth3,'xx.x');
    scrollView.add(lbl_secchiRead2);
    scrollView.add(tf_secchiRead2D);
    scrollView.add(tf_secchiRead2R);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var lbl_secchiRead3 = setLabel('Reading 3:',currentTop,f.colIndent,f.colWidth3);
    lbl_secchiRead3.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    var tf_secchiRead3D = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'xx.x');
    var tf_secchiRead3R = setTextFieldNumber('',elementTop,f.leftCol3_3,f.colWidth3,'xx.x');
    scrollView.add(lbl_secchiRead3);
    scrollView.add(tf_secchiRead3D);
    scrollView.add(tf_secchiRead3R);
    
    currentTop += f.otherSpace + 20;
    elementTop += f.otherSpace + 20; 
    
    
    var lbl_secchiCom = setLabel('Comments:',currentTop,f.colIndent,f.colWidth4);
    var tf_secchiCom = setTextFieldHint('',elementTop,f.leftCol4_2,f.colWidth4 + 19 + f.colWidth4 + 19 + f.colWidth4,'Enter comments');
    scrollView.add(lbl_secchiCom);
    scrollView.add(tf_secchiCom);
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    


    view.add(scrollView);
    
    //text field mask for value formatting 
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
    btn_qcDatePrep.addEventListener('click', function() {
          pickerWin.open();
    });
    picker.addEventListener('change',function(e){
        tf_qcDatePrep.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear();
    });
    pickerButton.addEventListener('click',function(){
         pickerWin.close();  
    });
    tf_qcDatePrep.addEventListener(eventListener, function() {
          tf_qcDatePrep.value = entryMask(tf_qcDatePrep.value,'date');
    }); 
    tf_tempRead.addEventListener(eventListener, function() {
          tf_tempRead.value = entryMask(tf_tempRead.value,'tens');
    });
    tf_sensRead.addEventListener(eventListener, function() {
          tf_sensRead.value = entryMask(tf_sensRead.value,'tens');
    });
    tf_cal.addEventListener(eventListener, function() {
        tf_cal.value = entryMask(tf_cal.value,'huns2');
    });
    tf_disp.addEventListener(eventListener, function() {
        tf_disp.value = entryMask(tf_disp.value,'huns2');
    });
    tf_phStd1Value.addEventListener(eventListener, function() {
        tf_phStd1Value.value = entryMask(tf_phStd1Value.value,'xxDOTxx');
    });
    tf_phStd2Value.addEventListener(eventListener, function() {
        tf_phStd2Value.value = entryMask(tf_phStd2Value.value,'xxDOTxx');
    });
    tf_condStd1Value.addEventListener(eventListener, function() {
        tf_condStd1Value.value = entryMask(tf_condStd1Value.value,'huns2');
    });
    tf_condStd2Value.addEventListener(eventListener, function() {
        tf_condStd2Value.value = entryMask(tf_condStd2Value.value,'huns2');
    });
    tf_qcTime.addEventListener(eventListener, function() {
        tf_qcTime.value = entryMask(tf_qcTime.value,'time');
    });
    tf_qcphExpected.addEventListener(eventListener, function() {
        tf_qcphExpected.value = entryMask(tf_qcphExpected.value,'xxDOTxx');
    });
    tf_qcCondExpected.addEventListener(eventListener, function() {
        tf_qcCondExpected.value = entryMask(tf_qcCondExpected.value,'huns2');
    });
    tf_qcTempMeasured.addEventListener(eventListener, function() {
        tf_qcTempMeasured.value = entryMask(tf_qcTempMeasured.value,'tens');
    });
    tf_qcphMeasured.addEventListener(eventListener, function() {
        tf_qcphMeasured.value = entryMask(tf_qcphMeasured.value,'xxDOTxx');
    });
    tf_qcCondMeasured.addEventListener(eventListener, function() {
        tf_qcCondMeasured.value = entryMask(tf_qcCondMeasured.value,'huns2');
    });
    tf_postphExpected.addEventListener(eventListener, function() {
        tf_postphExpected.value = entryMask(tf_postphExpected.value,'xxDOTxx');
    });
    tf_postCondExpected.addEventListener(eventListener, function() {
        tf_postCondExpected.value = entryMask(tf_postCondExpected.value,'huns2');
    });
    tf_postphMeasured.addEventListener(eventListener, function() {
        tf_postphMeasured.value = entryMask(tf_postphMeasured.value,'xxDOTxx');
    });
    tf_postCondMeasured.addEventListener(eventListener, function() {
        tf_postCondMeasured.value = entryMask(tf_postCondMeasured.value,'huns2');
    });
    tf_secchiTime.addEventListener(eventListener, function() {
        tf_secchiTime.value = entryMask(tf_secchiTime.value,'time');
    });
    tf_secchiRead1D.addEventListener(eventListener, function() {
        tf_secchiRead1D.value = entryMask(tf_secchiRead1D.value,'tens');
    });
    tf_secchiRead1R.addEventListener(eventListener, function() {
        tf_secchiRead1R.value = entryMask(tf_secchiRead1R.value,'tens');
    });
    tf_secchiRead2D.addEventListener(eventListener, function() {
        tf_secchiRead2D.value = entryMask(tf_secchiRead2D.value,'tens');
    });
    tf_secchiRead2R.addEventListener(eventListener, function() {
        tf_secchiRead2R.value = entryMask(tf_secchiRead2R.value,'tens');
    });
    tf_secchiRead3D.addEventListener(eventListener, function() {
        tf_secchiRead3D.value = entryMask(tf_secchiRead3D.value,'tens');
    });
    tf_secchiRead3R.addEventListener(eventListener, function() {
        tf_secchiRead3R.value = entryMask(tf_secchiRead3R.value,'tens');
    });    
    

    btn_update.addEventListener('click', function() {
        formFieldDict['CAL_INST_MODEL'] = tf_calModel.value;
        formFieldDict['CAL_INST_ID'] = tf_calID.value;
        formFieldDict['CAL_INST_OPERATOR'] = tf_calOper.value;
        formFieldDict['TEMP_THERMOMETER'] = tf_tempRead.value;
        formFieldDict['TEMP_SENSOR'] = tf_sensRead.value;
        formFieldDict['TEMP_COMMENT'] = tf_tempCom.value;
        formFieldDict['DO_BARO_PRESSURE'] = tf_baro.value;
        formFieldDict['DO_CALIBRATION_VALUE'] = tf_cal.value;
        if (btn_radiom1.state) {formFieldDict['DO_CALIBRATION_UNITS'] = 'mg/L';}
        if (btn_radiop1.state) {formFieldDict['DO_CALIBRATION_UNITS'] = 'PERCENT';}
        formFieldDict['DO_DISPLAYED_VALUE'] = tf_disp.value;
        if (btn_radiom2.state) {formFieldDict['DO_DISPLAYED_UNITS'] = 'mg/L';}
        if (btn_radiop2.state) {formFieldDict['DO_DISPLAYED_UNITS'] = 'PERCENT';}
        formFieldDict['DO_COMMENT'] = tf_doCom.value;
        formFieldDict['PH_STD1_DESCRIPTION'] = tf_phStd1Desc.value;
        formFieldDict['PH_STD1_VALUE'] = tf_phStd1Value.value;
        formFieldDict['PH_STD2_DESCRIPTION'] = tf_phStd2Desc.value;
        formFieldDict['PH_STD2_VALUE'] = tf_phStd2Value.value;
        formFieldDict['PH_COMMENT'] = tf_phCom.value;
        formFieldDict['COND_STD1_DESCRIPTION'] = tf_condStd1Desc.value;
        formFieldDict['COND_STD1_VALUE'] = tf_condStd1Value.value;
        formFieldDict['COND_STD2_DESCRIPTION'] = tf_condStd2Desc.value;
        formFieldDict['COND_STD2_VALUE'] = tf_condStd2Value.value;
        formFieldDict['COND_COMMENT'] = tf_condCom.value;
        if (btn_qcCheck.state) {
            formFieldDict['NO_QC_CHECK'] = 'Y';
        } else {
            formFieldDict['NO_QC_CHECK'] = 'N';
        }
        if (btn_intMeter.state) {
            formFieldDict['INTERNAL_METER_CHECK'] = 'Y';
        } else {
            formFieldDict['INTERNAL_METER_CHECK'] = 'N';
        }
        formFieldDict['QC_TIME'] = tf_qcTime.value;
        formFieldDict['EXPECTED_COND'] = tf_qcCondExpected.value;
        formFieldDict['EXPECTED_PH'] = tf_qcphExpected.value;
        formFieldDict['MEASURED_TEMP'] = tf_qcTempMeasured.value;
        formFieldDict['MEASURED_COND'] = tf_qcCondMeasured.value;
        formFieldDict['MEASURED_PH'] = tf_qcphMeasured.value;
        formFieldDict['DATE_PREPARED'] = tf_qcDatePrep.value;     
        formFieldDict['QC_COMMENT'] = tf_qcCom.value;
        formFieldDict['POST_EXPECTED_COND'] = tf_postCondExpected.value;
        formFieldDict['POST_EXPECTED_PH'] = tf_postphExpected.value;
        formFieldDict['POST_MEASURED_COND'] = tf_postCondMeasured.value;
        formFieldDict['POST_MEASURED_PH'] = tf_postphMeasured.value;
        formFieldDict['PS_COMMENT'] = tf_postComExpected.value;
        formFieldDict['PM_COMMENT'] = tf_postComMeasured.value;
        formFieldDict['SECCHI_TIME'] = tf_secchiTime.value;
        formFieldDict['DISAPPEARS_1'] = tf_secchiRead1D.value;
        formFieldDict['REAPPEARS_1'] = tf_secchiRead1R.value;
        formFieldDict['DISAPPEARS_2'] = tf_secchiRead2D.value;
        formFieldDict['REAPPEARS_2'] = tf_secchiRead2R.value;
        formFieldDict['DISAPPEARS_3'] = tf_secchiRead3D.value;
        formFieldDict['REAPPEARS_3'] = tf_secchiRead3R.value;
        if (btn_secchiClearY.state) {formFieldDict['CLEAR_TO_BOTTOM'] = 'Y';}
        if (btn_secchiClearN.state) {formFieldDict['CLEAR_TO_BOTTOM'] = 'N';}
        formFieldDict['SECCHI_COMMENT'] = tf_secchiCom.value;      
      
       saveJSON(formFieldDict,view.uid + '_FIELDMEASUREMENT.json');
       
    });

    view.addEventListener("updateFormField",function(e){
        //reset dictionary
        formFieldDict = openFormFieldDict();
        view.uid = e.siteid + '_' + e.visitno;
        
        retrieveJSON(formFieldDict,view.uid + '_FIELDMEASUREMENT.json');
        
        tf_calModel.value = formFieldDict['CAL_INST_MODEL'];
        tf_calID.value = formFieldDict['CAL_INST_ID'];
        tf_calOper.value = formFieldDict['CAL_INST_OPERATOR'];
        tf_tempRead.value = formFieldDict['TEMP_THERMOMETER'];
        tf_sensRead.value = formFieldDict['TEMP_SENSOR'];
        tf_tempCom.value = formFieldDict['TEMP_COMMENT'];
        tf_baro.value = formFieldDict['DO_BARO_PRESSURE'];
        tf_cal.value = formFieldDict['DO_CALIBRATION_VALUE'];
        if (formFieldDict['DO_CALIBRATION_UNITS'] === 'mg/L') {
            changeStateRadioButton (btn_radiom1,true);
        } else {
            changeStateRadioButton (btn_radiom1,false);
        }
        if (formFieldDict['DO_CALIBRATION_UNITS'] === 'PERCENT') {
            changeStateRadioButton (btn_radiop1,true);
        } else {
            changeStateRadioButton (btn_radiop1,false);
        }
        tf_disp.value = formFieldDict['DO_DISPLAYED_VALUE'];
        if (formFieldDict['DO_DISPLAYED_UNITS'] === 'mg/L') {
            changeStateRadioButton (btn_radiom2,true);
        } else {
            changeStateRadioButton (btn_radiom2,false);
        }
        if (formFieldDict['DO_DISPLAYED_UNITS'] === 'PERCENT') {
            changeStateRadioButton (btn_radiop2,true);
        } else {
            changeStateRadioButton (btn_radiop2,false);
        }
        tf_doCom.value = formFieldDict['DO_COMMENT'];
        tf_phStd1Desc.value = formFieldDict['PH_STD1_DESCRIPTION'];
        tf_phStd1Value.value = formFieldDict['PH_STD1_VALUE'];
        tf_phStd2Desc.value = formFieldDict['PH_STD2_DESCRIPTION'];
        tf_phStd2Value.value = formFieldDict['PH_STD2_VALUE'];
        tf_phCom.value = formFieldDict['PH_COMMENT'];
        tf_condStd1Desc.value = formFieldDict['COND_STD1_DESCRIPTION'];
        tf_condStd1Value.value = formFieldDict['COND_STD1_VALUE'];
        tf_condStd2Desc.value = formFieldDict['COND_STD2_DESCRIPTION'];
        tf_condStd2Value.value = formFieldDict['COND_STD2_VALUE'];
        tf_condCom.value = formFieldDict['COND_COMMENT'];
        if (formFieldDict['NO_QC_CHECK'] === 'Y') {
            changeStateRadioButton(btn_qcCheck,true);
        } else {
            changeStateRadioButton(btn_qcCheck,false);
        }
        if (formFieldDict['INTERNAL_METER_CHECK'] === 'Y') {
            changeStateRadioButton(btn_intMeter,true);
        } else {
            changeStateRadioButton(btn_intMeter,false);
        }
        tf_qcTime.value = formFieldDict['QC_TIME'];
        tf_qcCondExpected.value = formFieldDict['EXPECTED_COND'];
        tf_qcphExpected.value = formFieldDict['EXPECTED_PH'];
        tf_qcTempMeasured.value = formFieldDict['MEASURED_TEMP'];
        tf_qcCondMeasured.value = formFieldDict['MEASURED_COND'];
        tf_qcphMeasured.value = formFieldDict['MEASURED_PH'];
        tf_qcDatePrep.value = formFieldDict['DATE_PREPARED'];     
        tf_qcCom.value = formFieldDict['QC_COMMENT'];
        tf_postCondExpected.value = formFieldDict['POST_EXPECTED_COND'];
        tf_postphExpected.value = formFieldDict['POST_EXPECTED_PH'];
        tf_postCondMeasured.value = formFieldDict['POST_MEASURED_COND'];
        tf_postphMeasured.value = formFieldDict['POST_MEASURED_PH'];
        tf_postComExpected.value = formFieldDict['PS_COMMENT'];
        tf_postComMeasured.value = formFieldDict['PM_COMMENT'];
        tf_secchiTime.value = formFieldDict['SECCHI_TIME'];
        tf_secchiRead1D.value = formFieldDict['DISAPPEARS_1'];
        tf_secchiRead2D.value = formFieldDict['DISAPPEARS_2'];
        tf_secchiRead3D.value = formFieldDict['DISAPPEARS_3'];
        tf_secchiRead1R.value = formFieldDict['REAPPEARS_1'];
        tf_secchiRead2R.value = formFieldDict['REAPPEARS_2'];
        tf_secchiRead3R.value = formFieldDict['REAPPEARS_3'];
        if (formFieldDict['CLEAR_TO_BOTTOM'] === 'Y') {
            changeStateRadioButton(btn_secchiClearY,true);
        } else {
            changeStateRadioButton(btn_secchiClearY,false);
        }
        if (formFieldDict['CLEAR_TO_BOTTOM'] === 'N') {
            changeStateRadioButton(btn_secchiClearN,true);
        } else {
            changeStateRadioButton(btn_secchiClearN,false);
        }
        tf_secchiCom.value = formFieldDict['SECCHI_COMMENT'];
    });
   
    return view;
}

function setView_formProfile(){
    var f = formatValues();
    var formProfileDict = openFormProfileDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();

    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
      
    var hdr_profile = setHeader ('HYDROGRAPHIC PROFILE', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_profile); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_staDepth = setLabel ('Station Depth (m)', elementTop, f.colIndent, f.colWidth4);
    var tf_staDepth = setTextFieldNumber ('', currentTop, f.leftCol4_2, f.colWidth4, 'xx.x(m)');
    var lbl_eFile = setLabel ('Submitted via eFile', elementTop, f.leftCol4_3, f.colWidth4);
    var btn_eFile = setRadioButton(currentTop, f.leftCol4_4, false);
    btn_eFile.addEventListener('click',function() {
        switchRadioButton(btn_eFile);
    });
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    scrollView.add (lbl_staDepth);
    scrollView.add (tf_staDepth);
    scrollView.add (lbl_eFile);
    scrollView.add (btn_eFile);
       
    //create the list of depths 
    var tempArray = {};
    tempArray [1] = [1,'','','','','','','','','',''];
    view.depthArray = tempArray;    
 
//    var lbl_depth = setLabel('Depth',currentTop,f.colIndent + 50,f.colWidth4 - 50);
//    lbl_depth.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER; 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    var btn_leftLine = setLeftButton(currentTop,f.colIndent);
    var tf_lineNo = setTextField('1',elementTop,f.colIndent + 50,f.colWidth4 - 50);
    var btn_rightLine = setRightButton(currentTop,f.leftCol4_2);
    
    scrollView.add(btn_leftLine);
    scrollView.add(tf_lineNo);
    scrollView.add(btn_rightLine);    
    
    btn_leftLine.addEventListener('click',function(e){
        if (tf_lineNo.value > 1) {
            changeNum = Number(tf_lineNo.value) - 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
        }
    });
    btn_rightLine.addEventListener('click',function(e){
            changeNum = Number(tf_lineNo.value) + 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
    });
    
    lbl_cast = setLabel('Cast:',currentTop,f.leftCol4_2 + f.buttonWidth,f.colWidth4 - f.buttonWidth);
    lbl_cast.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    lbl_downcast = setLabel('Down',currentTop,f.leftCol4_3,f.colWidth4 - f.buttonWidth);
    lbl_downcast.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    btn_radioDowncast = setRadioButton(elementTop, f.leftCol4_3 + f.colWidth4 - f.buttonWidth, true);
    lbl_upcast = setLabel('Up',currentTop,f.leftCol4_4,f.buttonWidth);
    lbl_upcast.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    btn_radioUpcast = setRadioButton(elementTop, f.leftCol4_4 + f.buttonWidth, false);
    scrollView.add(lbl_cast);
    scrollView.add(lbl_downcast);
    scrollView.add(btn_radioDowncast);
    scrollView.add(lbl_upcast);
    scrollView.add(btn_radioUpcast);
    
    btn_radioDowncast.addEventListener('click',function() {
    	if (!(btn_radioDowncast.state)) {
        	switchRadioButton(btn_radioDowncast);
    	}
        if (btn_radioUpcast.state) {
        	switchRadioButton(btn_radioUpcast);
        }
    });
    btn_radioUpcast.addEventListener('click',function() {
        if (!(btn_radioUpcast.state)) {
        	switchRadioButton(btn_radioUpcast);
        }
        if (btn_radioDowncast.state) {
        	switchRadioButton(btn_radioDowncast);
        }
    });
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var lbl_depth = setLabel ('Depth (m)', currentTop, f.colIndent, f.colWidth4);
    var lbl_temp = setLabel ('Temp (C)', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_pH = setLabel ('pH', currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_DO = setLabel ('DO', currentTop, f.leftCol4_4, f.colWidth4);
   
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var tf_depth = setTextFieldNumber('', currentTop, f.colIndent, f.colWidth4,'xx.x');
    var tf_temp = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4, 'xx.x');
    var tf_pH = setTextFieldNumber('', currentTop, f.leftCol4_3, f.colWidth4, 'xx.xx');
    var tf_DO = setTextFieldNumber('', currentTop, f.leftCol4_4, f.colWidth4, 'xx.x');
    
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    scrollView.add (lbl_depth);
    scrollView.add (tf_depth);  
    scrollView.add (lbl_temp);
    scrollView.add (tf_temp);
    scrollView.add (lbl_pH);
    scrollView.add (tf_pH);
    scrollView.add (lbl_DO);
    scrollView.add (tf_DO);
  
    
    var lbl_sal = setLabel ('Salinity % (Marine)', currentTop, f.colIndent, f.colWidth4); 
    var lbl_cond = setLabel ('SP COND us/cm (GL)',currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_lightAMB = setLabel ('Light AMB', currentTop + 32, f.leftCol4_3, f.colWidth4); 
    var lbl_lightUW = setLabel ('Light UW',currentTop + 32, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;    
   
    var tf_sal = setTextFieldNumber('', currentTop, f.colIndent, f.colWidth4, 'xx.x');
    var tf_cond = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4, 'xxx.x');
    var tf_lightAMB = setTextFieldNumber('', currentTop, f.leftCol4_3, f.colWidth4, 'xxx.x');
    var tf_lightUW = setTextFieldNumber('', currentTop, f.leftCol4_4, f.colWidth4, 'xxx.x');   
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    scrollView.add (lbl_sal);
    scrollView.add (tf_sal);  
    scrollView.add (lbl_cond);
    scrollView.add (tf_cond);
    scrollView.add (lbl_lightAMB);
    scrollView.add (tf_lightAMB);
    scrollView.add (lbl_lightUW);
    scrollView.add (tf_lightUW);
    
     
    var lbl_comm = setLabel ('Comment:', currentTop, f.colIndent, f.colWidth4);
    var tf_comm = setTextField ('', elementTop, f.leftCol4_2, f.colWidth2 + 20 + f.colWidth4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    scrollView.add (lbl_comm);
    scrollView.add (tf_comm);
    //button events
  
    function changeLine(lineNo,changeNum){
    	var tempArray = view.depthArray;
        if (!(changeNum in tempArray)){
            tempArray[changeNum] = [changeNum,'','','','','','','','','',''];
        }
        tempArray[lineNo][0] = tf_lineNo.value;
        tempArray[lineNo][1] = tf_depth.value;
        tempArray[lineNo][2] = tf_temp.value; 
        tempArray[lineNo][3] = tf_pH.value;  
        tempArray[lineNo][4] = tf_DO.value;  
        tempArray[lineNo][5] = tf_sal.value;  
        tempArray[lineNo][6] = tf_cond.value;  
        tempArray[lineNo][7] = tf_lightAMB.value;  
        tempArray[lineNo][8] = tf_lightUW.value;  
        tempArray[lineNo][9] = tf_comm.value;
        if (btn_radioDowncast.state) {
        	tempArray[lineNo][10] = 'DOWNCAST';
        } else {
        	tempArray[lineNo][10] = 'UPCAST';
        }
        
        tf_depth.value = tempArray[changeNum][1];
        tf_temp.value = tempArray[changeNum][2];
        tf_pH.value = tempArray[changeNum][3];
        tf_DO.value = tempArray[changeNum][4];
        tf_sal.value = tempArray[changeNum][5];
        tf_cond.value = tempArray[changeNum][6];
        tf_lightAMB.value = tempArray[changeNum][7];
        tf_lightUW.value = tempArray[changeNum][8];
        tf_comm.value = tempArray[changeNum][9];
        if (tempArray[changeNum][10] === 'DOWNCAST') {
        	changeStateRadioButton (btn_radioDowncast,true);
        	changeStateRadioButton (btn_radioUpcast,false);
        } 
        if (tempArray[changeNum][10] === 'UPCAST') {
        	changeStateRadioButton (btn_radioUpcast,true);
        	changeStateRadioButton (btn_radioDowncast,false);
        } 
        view.depthArray = tempArray;
    };    
  
     //text field mask for value formatting 
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
 
    tf_staDepth.addEventListener(eventListener, function() {
        tf_staDepth.value = entryMask(tf_staDepth.value,'tens');
    });
    tf_depth.addEventListener(eventListener, function() {
        tf_depth.value = entryMask(tf_depth.value,'tens');
    });
    tf_temp.addEventListener(eventListener, function() {
        tf_temp.value = entryMask(tf_temp.value,'tens');
    });
    tf_pH.addEventListener(eventListener, function() {
        tf_pH.value = entryMask(tf_pH.value,'xxDOTxx');
    });
    tf_DO.addEventListener(eventListener, function() {
        tf_DO.value = entryMask(tf_DO.value,'tens');
    });
    tf_sal.addEventListener(eventListener, function() {
        tf_sal.value = entryMask(tf_sal.value,'tens');
    });
    tf_cond.addEventListener(eventListener, function() {
        tf_cond.value = entryMask(tf_cond.value,'huns2');
    });
    tf_lightAMB.addEventListener(eventListener, function() {
        tf_lightAMB.value = entryMask(tf_lightAMB.value,'huns2');
    });
    tf_lightUW.addEventListener(eventListener, function() {
        tf_lightUW.value = entryMask(tf_lightUW.value,'huns2');
    });
   
    
    btn_update.addEventListener ('click', function(e) {
    	//make sure current line is updated
    	var tempArray = view.depthArray;
        tempArray[Number(tf_lineNo.value)][0] = tf_lineNo.value;
        tempArray[Number(tf_lineNo.value)][1] = tf_depth.value;
        tempArray[Number(tf_lineNo.value)][2] = tf_temp.value; 
        tempArray[Number(tf_lineNo.value)][3] = tf_pH.value;  
        tempArray[Number(tf_lineNo.value)][4] = tf_DO.value;  
        tempArray[Number(tf_lineNo.value)][5] = tf_sal.value;  
        tempArray[Number(tf_lineNo.value)][6] = tf_cond.value;  
        tempArray[Number(tf_lineNo.value)][7] = tf_lightAMB.value;  
        tempArray[Number(tf_lineNo.value)][8] = tf_lightUW.value;  
        tempArray[Number(tf_lineNo.value)][9] = tf_comm.value;
        if (btn_radioDowncast.state) {
        	tempArray[Number(tf_lineNo.value)][10] = 'DOWNCAST';
        } else {
        	tempArray[Number(tf_lineNo.value)][10] = 'UPCAST';
        }
		//now prepare dictionary
    	formProfileDict['STATION_DEPTH'] = tf_staDepth.value;
		if (btn_eFile.state) {
        	formProfileDict['EFILE'] = 'Y';
        } else {
        	formProfileDict['EFILE'] = 'N';
        }
		view.depthArray = tempArray;
		var size = 0, key;
	    for (key in view.depthArray) {
	        if (view.depthArray.hasOwnProperty(key)) size++;
	    }
    	for (var i = 1; i < size+1; i++) {
    		formProfileDict['LINE_' + String(i)] = view.depthArray[i][0];
            formProfileDict['DEPTH_' + String(i)] = view.depthArray[i][1];
            formProfileDict['TEMPERATURE_' + String(i)] = view.depthArray[i][2];
            formProfileDict['PH_' + String(i)] = view.depthArray[i][3];
            formProfileDict['DO_' + String(i)] = view.depthArray[i][4];
            formProfileDict['SALINITY_' + String(i)] = view.depthArray[i][5];
            formProfileDict['CONDUCTIVITY_' + String(i)] = view.depthArray[i][6];
            formProfileDict['LIGHT_AMB_' + String(i)] = view.depthArray[i][7];
            formProfileDict['LIGHT_UW_' + String(i)] = view.depthArray[i][8];
            formProfileDict['COMMENT_' + String(i)] = view.depthArray[i][9];
            formProfileDict['CAST_' + String(i)] = view.depthArray[i][10];
	    }
             
        saveJSON(formProfileDict,view.uid + '_PROFILE.json');
        saveJSON(view.depthArray,view.uid + '_PROFILE_lineInfo.json');
    });
    
    view.addEventListener("updateFormProfile",function(e){
        //reset dictionary
        formProfileDict = openFormProfileDict();
        view.uid = e.siteid + '_' + e.visitno;
        tf_staDepth.value = '';
        changeStateRadioButton(btn_eFile,false);
         
        retrieveJSON(formProfileDict,view.uid + '_PROFILE.json');
        retrieveJSON(view.depthArray,view.uid + '_PROFILE_lineInfo.json');
           
        tf_staDepth.value = formProfileDict['STATION_DEPTH'];
     
        if (formProfileDict['EFILE'] === 'Y') {
            changeStateRadioButton(btn_eFile,true);
        }

        //line data
        tf_lineNo.value = '1';
        tf_depth.value = '';
        tf_temp.value = '';
        tf_pH.value = '';
        tf_DO.value = '';
        tf_sal.value = '';
        tf_cond.value = '';
        tf_lightAMB.value = '';
        tf_lightUW.value = '';
        tf_comm.value = '';
        view.depthArray = {};
        var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_PROFILE_lineInfo.json');
	    if (jsonFile.exists()) {
        	var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_PROFILE_lineInfo.json');
	        var data = jsonFile.read().text;
	        view.depthArray = JSON.parse(data);
	        tf_depth.value = view.depthArray[1][1];
	        tf_temp.value = view.depthArray[1][2];
	        tf_pH.value = view.depthArray[1][3];
	        tf_DO.value = view.depthArray[1][4];
	        tf_sal.value = view.depthArray[1][5];
	        tf_cond.value = view.depthArray[1][6];
	        tf_lightAMB.value = view.depthArray[1][7];
	        tf_lightUW.value = view.depthArray[1][8];
	        tf_comm.value = view.depthArray[1][9];
	        
	    } else {
	    	var tempArray = {};
	    	tempArray[1] = ['1','','','','','','','','','',''];
	    	view.depthArray = tempArray;
	    	changeStateRadioButton(btn_radioDowncast,true);
	    	changeStateRadioButton(btn_radioUpcast,false);
	    }
       
    });
    view.add(scrollView);
    return view;
}

function setView_formSample(){
    var f = formatValues();
    var formSampleDict = openFormSampleDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();
 
    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
      
    var hdr_chemistry = setHeader ('Water Chemistry Sample', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_chemistry);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_chemIntro = setRedLabel ('You must fill in a SAMPLE_ID for this sample and save the page, all other sample types depend on this id'
        , currentTop, f.colIndent, f.colWidth1);
    scrollView.add (lbl_chemIntro);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var statenotcollCHEM = false;
    var btn_radioNotCollectedCHEM = new setRadioButton((elementTop),(f.colIndent),statenotcollCHEM);
    var lbl_notCollectedCHEM = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDCHEM = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_chilledCHEM = setLabel ('Chilled?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentCHEM = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var statechilledCHEM = false;
    var tf_sampleIDCHEM = setTextFieldNumber('',currentTop, f.colIndent, f.colWidth4,'Enter number');
    var btn_radioChilledCHEM = setRadioButton((elementTop),(f.leftCol4_2 + 30),statechilledCHEM);
    var tf_commentCHEM = setTextField ('',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_sampleIDCHEM);
    scrollView.add (lbl_chilledCHEM);
    scrollView.add (lbl_commentCHEM);
    scrollView.add (lbl_notCollectedCHEM);
    scrollView.add (tf_sampleIDCHEM);
    scrollView.add (btn_radioChilledCHEM);
    scrollView.add (tf_commentCHEM);
    scrollView.add (btn_radioNotCollectedCHEM);
 
    //button events
     
    var notCollCHEM = '';
    btn_radioNotCollectedCHEM.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedCHEM);
        if (btn_radioNotCollectedCHEM.state) {
            tf_sampleIDCHEM.value = '';
        } else {
            tf_sampleIDCHEM.value = formSampleDict['CHEM_SAMPLE_ID'];
        }
    });
     
    btn_radioChilledCHEM.addEventListener('click',function() {
        switchRadioButton(btn_radioChilledCHEM);
    });
     
 
    var hdr_chlorophyll = setHeader ('Chlorophyll Sample', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_chlorophyll);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

 	var statenotcollCHLA = false;
    var btn_radioNotCollectedCHLA =  setRadioButton((elementTop),(f.colIndent),statenotcollCHLA);
    var lbl_notCollectedCHLA = setLabel ('Not Collected',  currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDCHLA = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_frozenCHLA = setLabel ('Frozen?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_volFilterCHLA = setLabel ('Vol. filt (ml)', currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_commentCHLA = setLabel ('Comments',currentTop, f.leftCol4_4, f.colWidth4);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var statefrozenCHLA = false;
    var tf_sampleIDCHLA = setTextFieldHint('',currentTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDCHLA.enabled = false;
    var btn_radioFrozenCHLA =  setRadioButton((elementTop),(f.leftCol4_2 + 30), statefrozenCHLA);
    var tf_volFilterCHLA = setTextFieldNumber('', currentTop, f.leftCol4_3, f.colWidth4,'mL');
    var tf_commentCHLA = setTextField ('',currentTop, f.leftCol4_4, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_sampleIDCHLA);
    scrollView.add (lbl_frozenCHLA);
    scrollView.add (lbl_volFilterCHLA);
    scrollView.add (lbl_commentCHLA);
    scrollView.add (lbl_notCollectedCHLA);
    scrollView.add (tf_sampleIDCHLA);
    scrollView.add (btn_radioFrozenCHLA);
    scrollView.add (tf_volFilterCHLA);
    scrollView.add (tf_commentCHLA);
    scrollView.add (btn_radioNotCollectedCHLA);
 
    //button events
     
    var notCollCHLA = '';
    btn_radioNotCollectedCHLA.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedCHLA);
        if (btn_radioNotCollectedCHLA.state) {
            tf_sampleIDCHLA.value = '';
        }else{
            tf_sampleIDCHLA.value = Number(tf_sampleIDCHEM.value) + 1;
        }
    });
    btn_radioFrozenCHLA.addEventListener('click',function() {
        switchRadioButton(btn_radioFrozenCHLA);
    });
    
    var hdr_nuts = setHeader ('Nutrients Sample', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_nuts);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
 	var statenotcollNUTS = false;
 	var btn_radioNotCollectedNUTS = setRadioButton((elementTop),(f.colIndent),statenotcollNUTS);
    var lbl_notCollectedNUTS = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDNUTS = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_chilledNUTS = setLabel ('Chilled?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentNUTS = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var statechilledNUTS = false;
    var tf_sampleIDNUTS = setTextFieldHint('',currentTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDNUTS.enabled = false;
    var btn_radioChilledNUTS = setRadioButton((currentTop),(f.leftCol4_2 + 30), statechilledNUTS);
    var tf_commentNUTS = setTextField ('',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_sampleIDNUTS);
    scrollView.add (lbl_chilledNUTS);
    scrollView.add (lbl_commentNUTS);
    scrollView.add (lbl_notCollectedNUTS);
    scrollView.add (tf_sampleIDNUTS);
    scrollView.add (btn_radioChilledNUTS);
    scrollView.add (tf_commentNUTS);
    scrollView.add (btn_radioNotCollectedNUTS);
 
    //button events
     
    var notCollNUTS = '';
    btn_radioNotCollectedNUTS.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedNUTS);
        if (btn_radioNotCollectedNUTS.state) {
            tf_sampleIDNUTS.value = '';
        } else {
            tf_sampleIDNUTS.value = Number(tf_sampleIDCHEM.value) + 2;
        }
    });
    btn_radioChilledNUTS.addEventListener('click',function() {
            switchRadioButton(btn_radioChilledNUTS);
    });
        
  	var hdr_micro = setHeader ('Microcystin Sample - Target Volume = 500 mL', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_micro);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var statenotcollMICX = false;
    var btn_radioNotCollectedMICX = setRadioButton((elementTop),(f.colIndent),statenotcollMICX);
    var lbl_notCollectedMICX =  setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDMICX = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_frozenMICX = setLabel ('Frozen?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentMICX = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var statefrozenMICX = false;
    var tf_sampleIDMICX = setTextFieldHint('',currentTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDMICX.enabled = false;
    var btn_radioFrozenMICX = setRadioButton((currentTop),(f.leftCol4_2 + 30),statefrozenMICX);
    var tf_commentMICX = setTextField ('',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_sampleIDMICX);
    scrollView.add (lbl_frozenMICX);
    scrollView.add (lbl_commentMICX);
    scrollView.add (lbl_notCollectedMICX);
    scrollView.add (tf_sampleIDMICX);
    scrollView.add (btn_radioFrozenMICX);
    scrollView.add (tf_commentMICX);
    scrollView.add (btn_radioNotCollectedMICX);
 
    //button events
     
    var notCollMICX = '';
    btn_radioNotCollectedMICX.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedMICX);
        if (btn_radioNotCollectedMICX.state) {
            tf_sampleIDMICX.value = '';
        } else {
            tf_sampleIDMICX.value = Number(tf_sampleIDCHEM.value) + 3;
        }
    });
    
    
    btn_radioFrozenMICX.addEventListener('click',function() {
            switchRadioButton(btn_radioFrozenMICX);
    });
 	
 	var hdr_algal = setHeader ('Algal Toxin Sample - Target Volume = 500 mL', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_algal);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var statenotcollALGX = false;
    var btn_radioNotCollectedALGX = setRadioButton((elementTop),(f.colIndent),statenotcollALGX);
    var lbl_notCollectedALGX =  setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDALGX = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_frozenALGX = setLabel ('Frozen?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentALGX = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var statefrozenALGX = false;
    var tf_sampleIDALGX = setTextFieldHint('',currentTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDALGX.enabled = false;
    var btn_radioFrozenALGX = setRadioButton((currentTop),(f.leftCol4_2 + 30),statefrozenALGX);
    var tf_commentALGX = setTextField ('',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_sampleIDALGX);
    scrollView.add (lbl_frozenALGX);
    scrollView.add (lbl_commentALGX);
    scrollView.add (lbl_notCollectedALGX);
    scrollView.add (tf_sampleIDALGX);
    scrollView.add (btn_radioFrozenALGX);
    scrollView.add (tf_commentALGX);
    scrollView.add (btn_radioNotCollectedALGX);
 
    //button events
     
    var notCollALGX = '';
    btn_radioNotCollectedALGX.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedALGX);
        if (btn_radioNotCollectedALGX.state) {
            tf_sampleIDALGX.value = '';
        } else {
            tf_sampleIDALGX.value = Number(tf_sampleIDCHEM.value) + 9;
        }
    });   
    btn_radioFrozenALGX.addEventListener('click',function() {
            switchRadioButton(btn_radioFrozenALGX);
    });  
 	
 	var hdr_entero = setHeader ('Enterococci Sample - Target Volume = 250 mL', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_entero);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var statenotcollENTE = false;
    var btn_radioNotCollectedENTE = setRadioButton((elementTop),(f.colIndent),statenotcollENTE);
    var lbl_notCollectedENTE = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
    
    var stateblankcollENTE = false;
    var btn_radioblankCollectedENTE = setRadioButton((elementTop),(f.leftCol4_3),stateblankcollENTE);
    var lbl_blankCollectedENTE = setLabel ('Blank Collected', currentTop, (f.leftCol4_3 + f.buttonWidth), f.colWidth2);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    scrollView.add (btn_radioNotCollectedENTE);
    scrollView.add (lbl_notCollectedENTE);
    scrollView.add (lbl_blankCollectedENTE);
    scrollView.add (btn_radioblankCollectedENTE);
   
	lbl_sampleIDENTE = setLabel ('Sample ID',currentTop, f.colIndent,f.colWidth4);
	lbl_timeCollENTE = setLabel ('Time Collected', currentTop, f.leftCol4_2,f.colWidth4);
	lbl_depthCollENTE = setLabel ('Depth Collected', currentTop, f.leftCol4_3,f.colWidth4);
	      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
   
	tf_sampleIDENTE = setTextFieldHint('',currentTop, f.colIndent,f.colWidth4,'[Auto-populated]');
	tf_sampleIDENTE.enabled = false;
	tf_timeCollENTE = setTextFieldNumber('', currentTop, f.leftCol4_2,f.colWidth4,'hhmm');
	tf_depthCollENTE = setTextFieldNumber('', currentTop, f.leftCol4_3,f.colWidth4,'Enter number');
	      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	   
	scrollView.add (lbl_sampleIDENTE);
	scrollView.add (lbl_timeCollENTE);
	scrollView.add (lbl_depthCollENTE);
	scrollView.add (tf_sampleIDENTE);
	scrollView.add (tf_timeCollENTE);
	scrollView.add (tf_depthCollENTE);
	   
	lbl_filtStartENTE = setLabel ('Filter Start Time',currentTop, f.colIndent,f.colWidth4);
	lbl_filtNum = setVLabel ('Filt. #', currentTop, f.leftCol4_2, f.colWIdth4);
	lbl_filtVolENTE = setLabel ('Volume Filtered', currentTop, (f.leftCol4_2) + 60, f.colWidth4);
	lbl_filtEndENTE = setLabel ('Filter End Time', currentTop, f.leftCol4_3,f.colWidth4);
	lbl_timeFrozENTE = setLabel ('Time Frozen', currentTop, f.leftCol4_4,f.colWidth4);
      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	   
	tf_filtStartENTE = setTextFieldNumber('',currentTop, f.colIndent,f.colWidth4,'hhmm');
	lbl_filt1ENTE = setLabel ('1', currentTop, f.leftCol4_2,f.colWidth4 - 100);
	tf_filt1ENTE = setTextFieldNumber('', currentTop, (f.leftCol4_2) + 60,f.colWidth4 -60,'Enter number');
	tf_filtEndENTE = setTextFieldNumber('', currentTop, f.leftCol4_3,f.colWidth4,'hhmm');
	tf_timeFrozENTE = setTextFieldNumber('', currentTop, f.leftCol4_4,f.colWidth4,'hhmm');
	 
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
   
	lbl_filt2ENTE = setLabel ('2', currentTop, f.leftCol4_2,f.colWidth4 - 100);
	tf_filt2ENTE = setTextFieldNumber('', currentTop, (f.leftCol4_2) + 60,f.colWidth4 -60,'Enter number');
	      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	
	lbl_sFiltVolENTE = setLabel ('Buffer Rinse',currentTop, f.colIndent,f.colWidth4);
	   
	lbl_sFilt1ENTE = setLabel ('1', currentTop, f.leftCol4_2,f.colWidth4 - 100);
	tf_sFilt1ENTE = setTextFieldNumber('', currentTop, (f.leftCol4_2) + 60,f.colWidth4 -60,'Enter number');
	      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	   
	lbl_sFilt2ENTE = setLabel ('2', currentTop, f.leftCol4_2,f.colWidth4 - 100);
	tf_sFilt2ENTE = setTextFieldNumber('', currentTop, (f.leftCol4_2) + 60,f.colWidth4 -60,'Enter number');
	      
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	   
	var lbl_commentENTE = setLabel ('Comments',currentTop, f.colIndent, f.colWidth4);
	var tf_commentENTE = setTextField ('',currentTop, f.leftCol4_2, f.colWidth2);
	   
	scrollView.add(lbl_filtStartENTE);
	scrollView.add(lbl_filtVolENTE);
	scrollView.add(lbl_filtEndENTE);
	scrollView.add(lbl_timeFrozENTE);
	scrollView.add(tf_filtStartENTE);
	scrollView.add(lbl_filtNum);
	scrollView.add(lbl_filt1ENTE);
	scrollView.add(tf_filt1ENTE);
	scrollView.add(tf_filtEndENTE);
	scrollView.add(tf_timeFrozENTE);
	scrollView.add(lbl_filt2ENTE);
	scrollView.add(tf_filt2ENTE);
	scrollView.add(lbl_sFiltVolENTE);
	scrollView.add(lbl_sFilt1ENTE);
	scrollView.add(tf_sFilt1ENTE);
	scrollView.add(lbl_sFilt2ENTE);
	scrollView.add(tf_sFilt2ENTE);
	scrollView.add(lbl_commentENTE);
	scrollView.add(tf_commentENTE);
	   
	currentTop += f.otherSpace;
	elementTop += f.otherSpace;
	
	//button events
	     
   btn_radioNotCollectedENTE.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedENTE);
        if (btn_radioNotCollectedENTE.state) {
            tf_sampleIDENTE.value = '';
        } else {
            tf_sampleIDENTE.value = Number(tf_sampleIDCHEM.value) + 11;
        }
    });
     
    btn_radioblankCollectedENTE.addEventListener('click',function() {
        switchRadioButton(btn_radioblankCollectedENTE);
    });
 
    //start here for GL phyto
 
    var hdr_phyto = setHeader ('Phytoplankton Sample', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_phyto);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
 	var statenotcollPHYT = false;
 	var btn_radioNotCollectedPHYT = setRadioButton((elementTop),(f.colIndent),statenotcollPHYT);
    var lbl_notCollectedPHYT = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sampleIDPHYT = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth5);
    var lbl_preservedPHYT = setLabel ('Preserved?', currentTop, f.leftCol5_2, f.colWidth5);
    var lbl_depthCollPHYT = setLabel ('Depth Collected', currentTop, f.leftCol5_3, f.colWidth5);
    var lbl_timeCollPHYT = setLabel ('Time Collected', currentTop, f.leftCol5_4, f.colWidth5);
    var lbl_timePresPHYT = setLabel ('Time Preserved', currentTop, f.leftCol5_5, f.colWidth5);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var tf_sampleIDPHYT = setTextFieldHint('', currentTop, f.colIndent, f.colWidth5,'[Auto-populated]');
    tf_sampleIDPHYT.enabled = false;
   
    var statepreservedPHYT = false;
    var btn_radiopreservedPHYT = new setRadioButton((elementTop),(f.leftCol5_2 + 30),statepreservedPHYT);
    var tf_depthCollPHYT = setTextFieldNumber('', currentTop, f.leftCol5_3, f.colWidth5, 'm');
    var tf_timeCollPHYT = setTextFieldNumber('', currentTop, f.leftCol5_4, f.colWidth5,'hh:mm');
    var tf_timePresPHYT = setTextFieldNumber('', currentTop, f.leftCol5_5, f.colWidth5,'hh:mm');
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_commentPHYT = setLabel ('Comments',currentTop, f.colIndent, f.colWidth4);
    var tf_commentPHYT = setTextField('',elementTop, f.leftCol4_2, f.colWidth2);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
 
    scrollView.add (btn_radioNotCollectedPHYT);
    scrollView.add (lbl_notCollectedPHYT);
    scrollView.add (lbl_sampleIDPHYT);
    scrollView.add (lbl_preservedPHYT);
    scrollView.add (lbl_depthCollPHYT);
    scrollView.add (lbl_timeCollPHYT);
    scrollView.add (lbl_timePresPHYT);

    scrollView.add (btn_radiopreservedPHYT);
    scrollView.add (tf_sampleIDPHYT);
    scrollView.add (tf_depthCollPHYT);
    scrollView.add (tf_timeCollPHYT);
    scrollView.add (tf_timePresPHYT);
    scrollView.add (lbl_commentPHYT);
    scrollView.add (tf_commentPHYT);
   
    //button events
     
    var notCollPHYT = '';
    btn_radioNotCollectedPHYT.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedPHYT);
        if (btn_radioNotCollectedPHYT.state) {
            tf_sampleIDPHYT.value = '';
        } else {
            tf_sampleIDPHYT.value = Number(tf_sampleIDCHEM.value) + 13;
        }
    });
     
    btn_radiopreservedPHYT.addEventListener('click', function() {
       switchRadioButton(btn_radiopreservedPHYT);
    });
 
 
 	var hdr_uvid = setHeader ('Underwater Video Recording', currentTop, f.colIndent, f.colWidth1);
 	scrollView.add (hdr_uvid);
 	
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
 	var statenotcollUVID = false;
    var btn_radioNotCollectedUVID = setRadioButton((elementTop),(f.colIndent),statenotcollUVID);
    var lbl_notCollectedUVID = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_fileNameUVID = setLabel ('File Name', currentTop, f.colIndent, f.colWidth3);
    var lbl_transferredUVID = setLabel ('Transferrd to SD card?', currentTop, f.leftCol3_2+ 30, f.colWidth3);
    var lbl_commentUVID = setLabel ('Comments', currentTop, f.leftCol3_3, f.colWidth3);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var tf_fileNameUVID = setTextFieldHint ('', currentTop, f.colIndent, f.colWidth3,'DVRyymmdd_hhmm_xxx.avi');
 
    var statetransferredUVID = false;
    var btn_radiotransferredUVID = new setRadioButton((elementTop),(f.leftCol3_2 +30),statetransferredUVID);
    var tf_commentUVID = setTextField ('', currentTop, f.leftCol3_3, f.colWidth3);
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    scrollView.add(lbl_notCollectedUVID);
    scrollView.add(btn_radioNotCollectedUVID);
    scrollView.add(lbl_fileNameUVID);
    scrollView.add(lbl_transferredUVID);
    scrollView.add(lbl_commentUVID);
    scrollView.add(tf_fileNameUVID);
    scrollView.add(btn_radiotransferredUVID);
    scrollView.add(tf_commentUVID);
 
   
    btn_radioNotCollectedUVID.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedUVID);
        if (btn_radioNotCollectedUVID.state) {
            tf_fileNameUVID.value = '';
        } else {
            tf_fileNameUVID.value = formSampleDict['UVID_FILENAME'];
        }
    });
 
 
    btn_radiotransferredUVID.addEventListener('click',function() {
        switchRadioButton(btn_radiotransferredUVID);
    });
    //BENT
    
    var hdr_BENT = setHeader ('BENT', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_BENT);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
       
    var statenotcollBENT = false;
    var btn_radioNotCollectedBENT = setRadioButton((elementTop),(f.colIndent),statenotcollBENT);
    var lbl_notCollectedBENT = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
   
    scrollView.add(lbl_notCollectedBENT);
    scrollView.add(btn_radioNotCollectedBENT);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_grabBENT = setLabel('Grab Area',currentTop, f.colIndent,f.colWidth4);
    var tf_grabBENT = setTextFieldNumber('', currentTop, f.leftCol4_2,f.colWidth4,'m2');
    var lbl_grabTypeBENT = setLabel('Grab Type',currentTop, f.leftCol4_3,f.colWidth4);
    var tf_grabTypeBENT = setTextField('', currentTop, f.leftCol4_4,(f.colWidth4-f.buttonWidth));
    var btn_grabTypeBENT = setDropdownButton((elementTop),(f.leftCol4_4 + f.colWidth4 - f.buttonWidth));
 
    //Include choices for bent dropdowns
    var grabTypeDataBENT = ['VAN VEEN','STANDARD PONAR','OTHER'];
    var grabTypeSelectBENT = setSelectTableView(grabTypeDataBENT);
 
    scrollView.add(lbl_grabBENT);
    scrollView.add(tf_grabBENT);
    scrollView.add(lbl_grabTypeBENT);
    scrollView.add(tf_grabTypeBENT);
    scrollView.add(btn_grabTypeBENT);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_grabSizeBENT = setLabel('Sieve Size',currentTop, f.colIndent,f.colWidth4);
    var tf_grabSizeBENT = setTextFieldNumber('', currentTop, f.leftCol4_2,(f.colWidth4-f.buttonWidth),'mm');
    tf_grabSizeBENT.editable = false;
    var btn_grabSizeBENT = setDropdownButton((elementTop),(f.leftCol4_2 + f.colWidth4 - f.buttonWidth));
    var lbl_grabNumBENT = setLabel('Number of Grabs',currentTop, f.leftCol4_3,f.colWidth4);
    var tf_grabNumBENT = setTextField('', currentTop, f.leftCol4_4,(f.colWidth4-f.buttonWidth));
    tf_grabNumBENT.editable = false;
    var btn_grabNumBENT = setDropdownButton((elementTop),(f.leftCol4_4 + f.colWidth4 - f.buttonWidth));
 
    //Include choices for bent dropdowns
    var grabSizeDataBENT = ['0.5','1.0'];
    var grabSizeSelectBENT = setSelectTableView(grabSizeDataBENT);
    var grabNumDataBENT = ['1','2'];
    var grabNumSelectBENT = setSelectTableView(grabNumDataBENT);
   
 
    scrollView.add(lbl_grabSizeBENT);
    scrollView.add(tf_grabSizeBENT);
    scrollView.add(btn_grabSizeBENT);
    scrollView.add(lbl_grabNumBENT);
    scrollView.add(tf_grabNumBENT);
    scrollView.add(btn_grabNumBENT);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;   
       
    var lbl_sampleIDBENT = setLabel('Sample ID', currentTop, f.colIndent, f.colWidth5);
    var lbl_sampleDepthBENT = setLabel('Sample Depth', currentTop, f.leftCol5_2, f.colWidth5);
    var lbl_noJarBENT = setLabel('No. Jars', currentTop, f.leftCol5_3, f.colWidth5);
    var lbl_preservedBENT = setLabel('Preserved?', elementTop, f.leftCol5_4, f.colWidth5);
    var lbl_commentBENT = setLabel('Comments',currentTop, f.leftCol5_5, f.colWidth5);
    scrollView.add(lbl_sampleIDBENT);
    scrollView.add(lbl_sampleDepthBENT);
    scrollView.add(lbl_noJarBENT);
    scrollView.add(lbl_preservedBENT);
    scrollView.add(lbl_commentBENT);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var tf_sampleIDBENT = setTextFieldHint('', currentTop, f.colIndent, f.colWidth5,'[Auto-populated]');
    tf_sampleIDBENT.enabled = false;
    var tf_sampleDepthBENT = setTextFieldNumber('', currentTop, f.leftCol5_2, f.colWidth5,'cm');
    var tf_noJarBENT = setTextFieldNumber('', currentTop, f.leftCol5_3, f.colWidth5,'Enter number');
    var statePreservedBENT = false;
    var btn_radioPreservedBENT = setRadioButton((elementTop),(f.leftCol5_4 + 30),statePreservedBENT);
    var tf_commentBENT = setTextField ('',currentTop, f.leftCol5_5, f.colWidth5);
    scrollView.add(tf_sampleIDBENT);
    scrollView.add(tf_sampleDepthBENT);
    scrollView.add(tf_noJarBENT);
    scrollView.add(btn_radioPreservedBENT);
    scrollView.add(tf_commentBENT);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
   //button events
     
   var notCollBENT = '';
   btn_radioNotCollectedBENT.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedBENT);
        if (btn_radioNotCollectedBENT.state) {
            tf_sampleIDBENT.value = '';
        } else {
            tf_sampleIDBENT.value = Number(tf_sampleIDCHEM.value) + 4;
        }
    });
 
    btn_radioPreservedBENT.addEventListener('click',function() {
        switchRadioButton(btn_radioPreservedBENT);
    });
   
    
    btn_grabTypeBENT.addEventListener('click', function() {
        popupWin.add(grabTypeSelectBENT);
        popupWin.open();
    });
 
    grabTypeSelectBENT.addEventListener('click',function(e){
        tf_grabTypeBENT.value = e.rowData.rowValue;
        popupWin.remove(grabTypeSelectBENT);
        popupWin.close();
    });           
    btn_grabSizeBENT.addEventListener('click', function() {
        popupWin.add(grabSizeSelectBENT);
        popupWin.open();
    });
 
    grabSizeSelectBENT.addEventListener('click',function(e){
        tf_grabSizeBENT.value = e.rowData.rowValue;
        popupWin.remove(grabSizeSelectBENT);
        popupWin.close();
    });
        
    btn_grabNumBENT.addEventListener('click', function() {
        popupWin.add(grabNumSelectBENT);
        popupWin.open();
    });
 
    grabNumSelectBENT.addEventListener('click',function(e){
        tf_grabNumBENT.value = e.rowData.rowValue;
        popupWin.remove(grabNumSelectBENT);
        popupWin.close();
    });
    
    //sediment characteristics section
      
    var hdr_sedChar = setHeader ('Sediment Characteristics (Benthic Grab)', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_sedChar);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sedOther = setLabel ('Other or Type:', currentTop, f.leftCol3_3, f.colWidth3);
    scrollView.add(lbl_sedOther);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var lbl_sedColor = setLabel ('Color', currentTop, f.colIndent, f.colWidth3);
    var tf_sedColor = setTextField ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth));
    tf_sedColor.editable = false;
    var btn_sedColor = setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedColorOther = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Other Color');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var lbl_sedSubstrate = setLabel ('Substrate', currentTop, f.colIndent, f.colWidth3);
    var tf_sedSubstrate = setTextField ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth));
    tf_sedSubstrate.editable = false;
    var btn_sedSubstrate = setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedSubstrateOther = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Other Substrate');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sedSmell = setLabel ('Smell', currentTop, f.colIndent, f.colWidth3);
    var tf_sedSmell = setTextField ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth));
    tf_sedSmell.editable = false;
    var btn_sedSmell = new setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedSmellOther = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Other Smell');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sedSurface = setLabel ('Surface', currentTop, f.colIndent, f.colWidth3);
    var tf_sedSurface = setTextField ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth));
    tf_sedSurface.editable = false;
    var btn_sedSurface = new setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedSurfaceOther = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Other Surface');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sedFauna = setLabel ('Visible Fauna', currentTop, f.colIndent, f.colWidth3);
    var tf_sedFauna = setTextFieldHint ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth), 'Y/N');
    tf_sedFauna.editable = false;
    var btn_sedFauna = new setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedFaunaType = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Fauna Type');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_sedFlora = setLabel ('Visible Flora', currentTop, f.colIndent, f.colWidth3);
    var tf_sedFlora = setTextFieldHint ('', elementTop, f.leftCol3_2, (f.colWidth3-f.buttonWidth), 'Y/N');
    tf_sedFlora.editable = false;
    var btn_sedFlora = new setDropdownButton((elementTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
    var tf_sedFloraType = setTextFieldHint ('', elementTop, f.leftCol3_3,f.colWidth3, 'Flora Type');
      
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    //Include choices for sedChar dropdowns
    var sedColorData = ['BLACK','BROWN','LIGHT_BROWN','DARK_BROWN','GRAY','OTHER'];
    var sedColorSelect = setSelectTableView(sedColorData);
    var sedSubstrateData = ['SAND','MUCK','GRAVEL','COBBLE','SHELLHASH','OTHER'];
    var sedSubstrateSelect = setSelectTableView(sedSubstrateData);
    var sedSmellData = ['FISHY','CHEMICAL','SULPHUR','NONE','OTHER'];
    var sedSmellSelect = setSelectTableView(sedSmellData);
    var sedSurfaceData = ['FILM','FLOC','NOTHING_NOTED','OTHER'];
    var sedSurfaceSelect = setSelectTableView(sedSurfaceData);
    var sedFaunaData = ['Y','N'];
    var sedFaunaSelect = setSelectTableView(sedFaunaData);
    var sedFloraData = ['Y','N'];
    var sedFloraSelect = setSelectTableView(sedFloraData);
   
    scrollView.add(lbl_sedColor);
    scrollView.add(tf_sedColor);
    scrollView.add(btn_sedColor);
    scrollView.add(tf_sedColorOther);
    scrollView.add(lbl_sedSubstrate);
    scrollView.add(tf_sedSubstrate);
    scrollView.add(btn_sedSubstrate);
    scrollView.add(tf_sedSubstrateOther);
    scrollView.add(lbl_sedSmell);
    scrollView.add(tf_sedSmell);
    scrollView.add(btn_sedSmell);
    scrollView.add(tf_sedSmellOther);
    scrollView.add(lbl_sedSurface);
    scrollView.add(tf_sedSurface);
    scrollView.add(btn_sedSurface);
    scrollView.add(tf_sedSurfaceOther);
    scrollView.add(lbl_sedFauna);
    scrollView.add(tf_sedFauna);
    scrollView.add(btn_sedFauna);
    scrollView.add(tf_sedFaunaType);
    scrollView.add(lbl_sedFlora);
    scrollView.add(tf_sedFlora);
    scrollView.add(btn_sedFlora);
    scrollView.add(tf_sedFloraType);
    
	//button events
 
    btn_sedColor.addEventListener('click', function() {
    popupWin.add(sedColorSelect);
    popupWin.open();
    });
	sedColorSelect.addEventListener('click',function(e){
    tf_sedColor.value = e.rowData.rowValue;
    popupWin.remove(sedColorSelect);
    popupWin.close();
    });   
      
	btn_sedSubstrate.addEventListener('click', function() {
    popupWin.add(sedSubstrateSelect);
    popupWin.open();
    });
    
	sedSubstrateSelect.addEventListener('click',function(e){
    tf_sedSubstrate.value = e.rowData.rowValue;
    popupWin.remove(sedSubstrateSelect);
    popupWin.close();
    });   
      
	btn_sedSmell.addEventListener('click', function() {
    popupWin.add(sedSmellSelect);
    popupWin.open();
    });
    
	sedSmellSelect.addEventListener('click',function(e){
    tf_sedSmell.value = e.rowData.rowValue;
    popupWin.remove(sedSmellSelect);
    popupWin.close();
    });   
      
	btn_sedSurface.addEventListener('click', function() {
    popupWin.add(sedSurfaceSelect);
    popupWin.open();
    });
    
	sedSurfaceSelect.addEventListener('click',function(e){
    tf_sedSurface.value = e.rowData.rowValue;
    popupWin.remove(sedSurfaceSelect);
    popupWin.close();
    });   
      
	btn_sedFauna.addEventListener('click', function() {
    popupWin.add(sedFaunaSelect);
    popupWin.open();
    });
    
    sedFaunaSelect.addEventListener('click',function(e){
    tf_sedFauna.value = e.rowData.rowValue;
    popupWin.remove(sedFaunaSelect);
    popupWin.close();
    });   
      
    btn_sedFlora.addEventListener('click', function() {
    popupWin.add(sedFloraSelect);
    popupWin.open();
    });
    
    sedFloraSelect.addEventListener('click',function(e){
    tf_sedFlora.value = e.rowData.rowValue;
    popupWin.remove(sedFloraSelect);
    popupWin.close();
    });        
      
    //sed samples
    var hdr_sediment = setHeader ('Sediment Samples',currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_sediment);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_sedoDist = setLabel('Distance Sediment Collected:',currentTop,f.colIndent,f.colWidth2);
    var tf_sedoDist = setTextField('',elementTop,f.leftCol2_2,f.colWidth2 - f.buttonWidth);
    tf_sedoDist.editable = false;
    var btn_sedoDist = setDropdownButton(elementTop,f.leftCol2_2 + f.colWidth2 - f.buttonWidth);
    var sedoDistData = ['37','Within 37m from X-site','37-100','Between 37-100m from X-site','100-500','Between 100-500m from X-site'];
    var sedoDistSelect = setSelectTableView2(sedoDistData);
    scrollView.add(lbl_sedoDist);
    scrollView.add(tf_sedoDist);
    scrollView.add(btn_sedoDist);
	btn_sedoDist.addEventListener('click', function() {
		popupWin.add(sedoDistSelect);
		popupWin.open();
	});
	sedoDistSelect.addEventListener('click',function(e){
		tf_sedoDist.value = e.rowData.rowValue;
		popupWin.remove(sedoDistSelect);
		popupWin.close();
	});


    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;

    //SEDX
    var title_sedimentX = setTitle ('Sediment Toxicity (SEDX)(Target = 900mL)', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_sedimentX);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var statenotcollSEDX = false;
    var btn_radioNotCollectedSEDX = new setRadioButton((elementTop),(f.colIndent),statenotcollSEDX);
    var lbl_notCollectedSEDX = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
  
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_sampleIDSEDX = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_chilledSEDX = setLabel ('Chilled?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentSEDX = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var stateChilledSEDX = false;
    var tf_sampleIDSEDX = setTextFieldHint('',elementTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDSEDX.enabled = false;
    var btn_radioChilledSEDX = setRadioButton (elementTop,(f.leftCol4_2 + 30), stateChilledSEDX);
    var tf_commentSEDX = setTextField ('',elementTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_notCollectedSEDX);
    scrollView.add (btn_radioNotCollectedSEDX);
    scrollView.add (lbl_chilledSEDX);
    scrollView.add (lbl_commentSEDX);
    scrollView.add (tf_sampleIDSEDX);
    scrollView.add (btn_radioChilledSEDX);
    scrollView.add (tf_commentSEDX);

    //button events
 
    var notCollSEDX = '';
    btn_radioNotCollectedSEDX.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedSEDX);
        if (btn_radioNotCollectedSEDX.state) {
            tf_sampleIDSEDX.value = '';
        } else {
            tf_sampleIDSEDX.value = Number(tf_sampleIDCHEM.value) + 8;
        }
    });
     
    btn_radioChilledSEDX.addEventListener('click',function() {
            switchRadioButton(btn_radioChilledSEDX);
    });
 
    //sedo
    var title_sedimentO = setTitle ('Sediment Org./Metals (SEDO)(Target = 100 mL)', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_sedimentO);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var statenotcollSEDO = false;
    var btn_radioNotCollectedSEDO = new setRadioButton((elementTop),(f.colIndent),statenotcollSEDO);
	var lbl_notCollectedSEDO = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_sampleIDSEDO = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_frozenSEDO = setLabel ('Frozen?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentSEDO = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var stateFrozenSEDO = false;
    var tf_sampleIDSEDO = setTextFieldHint('',elementTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDSEDO.enabled = false;
    var btn_radioFrozenSEDO =  setRadioButton (elementTop,(f.leftCol4_2 + 30), stateFrozenSEDO);
    var tf_commentSEDO = setTextField ('',elementTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_notCollectedSEDO);
    scrollView.add (btn_radioNotCollectedSEDO);
    scrollView.add (lbl_frozenSEDO);
    scrollView.add (lbl_commentSEDO);
    scrollView.add (tf_sampleIDSEDO);
    scrollView.add (btn_radioFrozenSEDO);
    scrollView.add (tf_commentSEDO);
  
    //button events
     
    var notCollSEDO = '';
    btn_radioNotCollectedSEDO.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedSEDO);
        if (btn_radioNotCollectedSEDO.state) {
            tf_sampleIDSEDO.value = '';
        } else {
            tf_sampleIDSEDO.value = Number(tf_sampleIDCHEM.value) + 7;
        }
    });
 
     
    btn_radioFrozenSEDO.addEventListener('click',function() {
            switchRadioButton(btn_radioFrozenSEDO);
    });
 
    //SEDC
    var title_sedimentC = setTitle ('Sediment TOC (SEDC)(Target = 50 mL)', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_sedimentC);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var statenotcollSEDC = false;
    var btn_radioNotCollectedSEDC = new setRadioButton((elementTop),(f.colIndent),statenotcollSEDC);
    var lbl_notCollectedSEDC = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_sampleIDSEDC = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_frozenSEDC = setLabel ('Frozen?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentSEDC = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var stateFrozenSEDC = false;
    var tf_sampleIDSEDC = setTextFieldHint('',elementTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDSEDC.enabled = false;
    var btn_radioFrozenSEDC = setRadioButton (elementTop,(f.leftCol4_2 + 30), stateFrozenSEDC);
    var tf_commentSEDC = setTextField ('',elementTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_notCollectedSEDC);
    scrollView.add (btn_radioNotCollectedSEDC);
    scrollView.add (lbl_frozenSEDC);
    scrollView.add (lbl_commentSEDC);
    scrollView.add (tf_sampleIDSEDC);
    scrollView.add (btn_radioFrozenSEDC);
    scrollView.add (tf_commentSEDC);

    //button events
 
    var notCollSEDC = '';
    btn_radioNotCollectedSEDC.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedSEDC);
        if (btn_radioNotCollectedSEDC.state) {
            tf_sampleIDSEDC.value = '';
        } else {
            tf_sampleIDSEDC.value = Number(tf_sampleIDCHEM.value) + 5;
        }
    });
     
     
    btn_radioFrozenSEDC.addEventListener('click',function() {
            switchRadioButton(btn_radioFrozenSEDC);
    });
 
 
    //sedg
    var title_sedimentG = setTitle ('Sediment Grain Size (SEDG)(Target = 100 mL)', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_sedimentG);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
   	var statenotcollSEDG = false;
    var btn_radioNotCollectedSEDG = new setRadioButton((elementTop),(f.colIndent),statenotcollSEDG);
    var lbl_notCollectedSEDG = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
  
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
 
    var lbl_sampleIDSEDG = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var lbl_chilledSEDG = setLabel ('Chilled?', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_commentSEDG = setLabel ('Comments',currentTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var stateChilledSEDG = false;
    var tf_sampleIDSEDG = setTextFieldHint('',elementTop, f.colIndent, f.colWidth4,'[Auto-populated]');
    tf_sampleIDSEDG.enabled = false;
    var btn_radioChilledSEDG = setRadioButton (elementTop,(f.leftCol4_2 + 30), stateChilledSEDG);
    var tf_commentSEDG = setTextField ('',elementTop, f.leftCol4_3, f.colWidth4);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    scrollView.add (lbl_notCollectedSEDG);
    scrollView.add (btn_radioNotCollectedSEDG);
    scrollView.add (lbl_chilledSEDG);
    scrollView.add (lbl_commentSEDG);
    scrollView.add (tf_sampleIDSEDG);
    scrollView.add (btn_radioChilledSEDG);
    scrollView.add (tf_commentSEDG);
 
    //button events
     
    var notCollSEDG = '';
    btn_radioNotCollectedSEDG.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedSEDG);
        if (btn_radioNotCollectedSEDG.state) {
            tf_sampleIDSEDG.value = '';
        } else {
            tf_sampleIDSEDG.value = Number(tf_sampleIDCHEM.value) + 6;
        }
    });
          
    btn_radioChilledSEDG.addEventListener('click',function() {
            switchRadioButton(btn_radioChilledSEDG);
    });
     
 	tf_sampleIDCHEM.addEventListener ('change',function(){
 	    tf_sampleIDCHLA.value = Number(tf_sampleIDCHEM.value) + 1;
 	    tf_sampleIDNUTS.value = Number(tf_sampleIDCHEM.value) + 2;
 	    tf_sampleIDMICX.value = Number(tf_sampleIDCHEM.value) + 3;
 	    tf_sampleIDENTE.value = Number(tf_sampleIDCHEM.value) + 11;
 	    tf_sampleIDPHYT.value = Number(tf_sampleIDCHEM.value) + 13;
 	    tf_sampleIDBENT.value = Number(tf_sampleIDCHEM.value) + 4;
        tf_sampleIDALGX.value = Number(tf_sampleIDCHEM.value) + 9;
 	    tf_sampleIDSEDC.value = Number(tf_sampleIDCHEM.value) + 5; 
 	    tf_sampleIDSEDG.value = Number(tf_sampleIDCHEM.value) + 6;
 	    tf_sampleIDSEDO.value = Number(tf_sampleIDCHEM.value) + 7;
 	    tf_sampleIDSEDX.value = Number(tf_sampleIDCHEM.value) + 8;
 	});
    //text field mask for value formatting 
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
 
    tf_timeCollENTE.addEventListener(eventListener, function() {
          tf_timeCollENTE.value = entryMask(tf_timeCollENTE.value,'time');
    });
    tf_filtStartENTE.addEventListener(eventListener, function() {
          tf_filtStartENTE.value = entryMask(tf_filtStartENTE.value,'time');
    });
    tf_filtEndENTE.addEventListener(eventListener, function() {
          tf_filtEndENTE.value = entryMask(tf_filtEndENTE.value,'time');
    });
    tf_timeFrozENTE.addEventListener(eventListener, function() {
          tf_timeFrozENTE.value = entryMask(tf_timeFrozENTE.value,'time');
    });
     
	
	btn_update.addEventListener('click', function() {
		formSampleDict['CHEM_SAMPLE_ID'] = tf_sampleIDCHEM.value;
		if (btn_radioChilledCHEM.state) {
	        formSampleDict['CHEM_CHILLED'] = 'Y';
	    } else {
	        formSampleDict['CHEM_CHILLED'] = 'N';
	    };
		if (btn_radioNotCollectedCHEM.state) {
			formSampleDict['CHEM_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['CHEM_NOT_COLLECTED'] = 'N';
		};
		formSampleDict['CHEM_COMMENT'] = tf_commentCHEM.value;	
		formSampleDict['CHLA_SAMPLE_ID']=tf_sampleIDCHLA.value;
		if (btn_radioFrozenCHLA.state) {
	        formSampleDict['CHLA_FROZEN'] = 'Y';
	    } else {
	        formSampleDict['CHLA_FROZEN'] = 'N';
	    };
		formSampleDict['CHLA_VOLUME_FILTERED']= tf_volFilterCHLA.value;
		if (btn_radioNotCollectedCHLA.state) {
			formSampleDict['CHLA_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['CHLA_NOT_COLLECTED'] = 'N';
		};	
		formSampleDict['CHLA_COMMENT'] = tf_commentCHLA.value;
	 	formSampleDict['NUTS_SAMPLE_ID'] = tf_sampleIDNUTS.value;
		if (btn_radioChilledNUTS.state) {
	        formSampleDict['NUTS_CHILLED'] = 'Y';
	    } else {
	        formSampleDict['NUTS_CHILLED'] = 'N';
	    };
		if (btn_radioNotCollectedNUTS.state) {
			formSampleDict['NUTS_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['NUTS_NOT_COLLECTED'] = 'N';
		};		
		formSampleDict['NUTS_COMMENT'] = tf_commentNUTS.value;	
		formSampleDict['MICX_SAMPLE_ID']=tf_sampleIDMICX.value;
		if (btn_radioFrozenMICX.state) {
	        formSampleDict['MICX_FROZEN'] = 'Y';
	    } else {
	        formSampleDict['MICX_FROZEN'] = 'N';
	    };  
		if (btn_radioNotCollectedMICX.state) {
			formSampleDict['MICX_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['MICX_NOT_COLLECTED'] = 'N';
		};	
		formSampleDict['MICX_COMMENT'] = tf_commentMICX.value;
		formSampleDict['ALGX_SAMPLE_ID']=tf_sampleIDALGX.value;
        if (btn_radioFrozenALGX.state) {
            formSampleDict['ALGX_FROZEN'] = 'Y';
        } else {
            formSampleDict['ALGX_FROZEN'] = 'N';
        };  
        if (btn_radioNotCollectedALGX.state) {
            formSampleDict['ALGX_NOT_COLLECTED'] = 'Y';
        } else {
            formSampleDict['ALGX_NOT_COLLECTED'] = 'N';
        };  
        formSampleDict['ALGX_COMMENT'] = tf_commentALGX.value;
		formSampleDict['ENTE_SAMPLE_ID']= tf_sampleIDENTE.value;
		formSampleDict['ENTE_TIME_COLLECTED']= tf_timeCollENTE.value;
		formSampleDict['ENTE_DEPTH_COLLECTED']= tf_depthCollENTE.value;
		formSampleDict['ENTE_FILTER_START_TIME']= tf_filtStartENTE.value;
		formSampleDict['ENTE_FILTER_1']= tf_filt1ENTE.value;
		formSampleDict['ENTE_FILTER_2']= tf_filt2ENTE.value;
		formSampleDict['ENTE_BUFFER_RINSE_1']= tf_sFilt1ENTE.value;
		formSampleDict['ENTE_BUFFER_RINSE_2']= tf_sFilt2ENTE.value;
		formSampleDict['ENTE_FILTER_END_TIME']= tf_filtEndENTE.value;
		formSampleDict['ENTE_TIME_FROZEN']= tf_timeFrozENTE.value;
		if (btn_radioNotCollectedENTE.state) {
			formSampleDict['ENTE_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['ENTE_NOT_COLLECTED'] = 'N';
		};	
		if (btn_radioblankCollectedENTE.state) {
	        formSampleDict['ENTE_BLANK_COLLECTED'] = 'Y';
	    } else {
	        formSampleDict['ENTE_BLANK_COLLECTED'] = 'N';
	    };  
		formSampleDict['ENTE_COMMENT'] = tf_commentENTE.value;
		if (btn_radioNotCollectedPHYT.state) {
			formSampleDict['PHYT_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['PHYT_NOT_COLLECTED'] = 'N';
		};	
		
		formSampleDict['PHYT_SAMPLE_ID']=tf_sampleIDPHYT.value;
		if (btn_radiopreservedPHYT.state) {
			formSampleDict['PHYT_PRESERVED'] = 'Y';
		} else {
			formSampleDict['PHYT_PRESERVED'] = 'N';
		};	
		formSampleDict['PHYT_DEPTH_COLLECTED']= tf_depthCollPHYT.value;
		formSampleDict['PHYT_TIME_COLLECTED']= tf_timeCollPHYT.value;
		formSampleDict['PHYT_TIME_PRESERVED']= tf_timePresPHYT.value;
				
		formSampleDict['PHYT_COMMENT'] = tf_commentPHYT.value;
		formSampleDict['UVID_FILENAME']= tf_fileNameUVID.value;
		if (btn_radioNotCollectedUVID.state) {
			formSampleDict['UVID_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['UVID_NOT_COLLECTED'] = 'N';
		};
		if (btn_radiotransferredUVID.state) {
			formSampleDict['UVID_TRANSFERRED'] = 'Y';
		} else {
			formSampleDict['UVID_TRANSFERRED'] = 'N';
		};
		formSampleDict['UVID_COMMENT'] = tf_commentUVID.value;
		formSampleDict['BENT_GRAB_AREA']= tf_grabBENT.value;
		formSampleDict['BENT_GRAB_TYPE']= tf_grabTypeBENT.value;
		formSampleDict['BENT_SIEVE_SIZE']=tf_grabSizeBENT.value;
		formSampleDict['BENT_GRABS']= tf_grabNumBENT.value;
	 	if (btn_radioNotCollectedBENT.state) {
			formSampleDict['BENT_NOT_COLLECTED'] = 'Y';
		} else {
			formSampleDict['BENT_NOT_COLLECTED'] = 'N';
		};
	 	
		formSampleDict['BENT_SAMPLE_ID']= tf_sampleIDBENT.value;
		formSampleDict['BENT_DEPTH']= tf_sampleDepthBENT.value;
		formSampleDict['BENT_JAR_NO']= tf_noJarBENT.value;
		if (btn_radioPreservedBENT.state) {
			formSampleDict['BENT_PRESERVED'] = 'Y';
		} else {
			formSampleDict['BENT_PRESERVED'] = 'N';
		};	
		formSampleDict['BENT_COMMENT'] = tf_commentBENT.value;   
	    if (tf_sedColor.value === 'OTHER') {
	            formSampleDict['BENT_COLOR'] = tf_sedColorOther.value;
	        } else {
	            formSampleDict['BENT_COLOR'] = tf_sedColor.value;
	        }
	    if (tf_sedSubstrate.value === 'OTHER') {
	            formSampleDict['BENT_SUBSTRATE'] = tf_sedSubstrateOther.value;
	        } else {
	            formSampleDict['BENT_SUBSTRATE'] = tf_sedSubstrate.value;
	        }
	    if (tf_sedSmell.value === 'OTHER') {
	            formSampleDict['BENT_SMELL'] = tf_sedSmellOther.value;
	        } else {
	            formSampleDict['BENT_SMELL'] = tf_sedSmell.value;
	        }
	    if (tf_sedSurface.value === 'OTHER') {
	            formSampleDict['BENT_SURFACE'] = tf_sedSurfaceOther.value;
	        } else {
	            formSampleDict['BENT_SURFACE'] = tf_sedSurface.value;
	        }
	    formSampleDict['BENT_VISIBLE_FAUNA']= tf_sedFauna.value;
	    formSampleDict['BENT_FAUNA_TYPE']= tf_sedFaunaType.value;
	    formSampleDict['BENT_VISIBLE_FLORA']= tf_sedFlora.value;
	    formSampleDict['BENT_FLORA_TYPE']= tf_sedFloraType.value; 
	    
        if (btn_radioNotCollectedSEDX.state) {
            formSampleDict['SEDX_NOT_COLLECTED'] = 'Y';
        } else {
            formSampleDict['SEDX_NOT_COLLECTED'] = 'N';
        };
        formSampleDict['SEDX_SAMPLE_ID']= tf_sampleIDSEDX.value;
        if (btn_radioChilledSEDX.state) {
            formSampleDict['SEDX_CHILLED'] = 'Y';
        } else {
            formSampleDict['SEDX_CHILLED'] = 'N';
        };
        formSampleDict['SEDX_COMMENT'] = tf_commentSEDX.value;     
	    
	    if (btn_radioNotCollectedSEDO.state) {
	        formSampleDict['SEDO_NOT_COLLECTED'] = 'Y';
	    } else {
	        formSampleDict['SEDO_NOT_COLLECTED'] = 'N';
	    };
	    formSampleDict['SEDO_DISTANCE'] = tf_sedoDist.value;
	    formSampleDict['SEDO_SAMPLE_ID']= tf_sampleIDSEDO.value;
	    if (btn_radioFrozenSEDO.state) {
	        formSampleDict['SEDO_FROZEN'] = 'Y';
	    } else {
	        formSampleDict['SEDO_FROZEN'] = 'N';
	    };
	    formSampleDict['SEDO_COMMENT'] = tf_commentSEDO.value;
	    
        if (btn_radioNotCollectedSEDC.state) {
            formSampleDict['SEDC_NOT_COLLECTED'] = 'Y';
        } else {
            formSampleDict['SEDC_NOT_COLLECTED'] = 'N';
        };
        formSampleDict['SEDC_SAMPLE_ID']= tf_sampleIDSEDC.value;
        if (btn_radioFrozenSEDC.state) {
            formSampleDict['SEDC_FROZEN'] = 'Y';
        } else {
            formSampleDict['SEDC_FROZEN'] = 'N';
        };
        formSampleDict['SEDC_COMMENT'] = tf_commentSEDC.value; 	    
	    
	    if (btn_radioNotCollectedSEDG.state) {
            formSampleDict['SEDG_NOT_COLLECTED'] = 'Y';
        } else {
            formSampleDict['SEDG_NOT_COLLECTED'] = 'N';
        };
        formSampleDict['SEDG_SAMPLE_ID']= tf_sampleIDSEDG.value;
        if (btn_radioChilledSEDG.state) {
            formSampleDict['SEDG_CHILLED'] = 'Y';
        } else {
            formSampleDict['SEDG_CHILLED'] = 'N';
        };
        formSampleDict['SEDG_COMMENT'] = tf_commentSEDG.value;  
              
		saveJSON(formSampleDict,view.uid + '_SAMPLECOLLECTION.json');      
        view.fireEvent('chemIDUpdated', {
            siteid:view.siteid,
            visitno:view.visitno,
        });
    });
    
    view.addEventListener("updateFormSample",function(e){
	    //reset dictionary
		formSampleDict = openFormSampleDict();
		view.siteid = e.siteid;
		view.visitno = e.visitno;
	    view.uid = e.siteid + '_' + e.visitno;      
	     
	    retrieveJSON(formSampleDict,view.uid + '_SAMPLECOLLECTION.json');
	        
		//populate values from json-populated dictionary
		tf_sampleIDCHEM.value = formSampleDict['CHEM_SAMPLE_ID'];
	    if (formSampleDict['CHEM_CHILLED'] === 'Y') {
	        changeStateRadioButton (btn_radioChilledCHEM,true);
	    } else {
	       changeStateRadioButton (btn_radioChilledCHEM,false);
	    }
		if (formSampleDict['CHEM_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedCHEM,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedCHEM,false);
	    }
		tf_commentCHEM.value = formSampleDict['CHEM_COMMENT'];
		tf_sampleIDCHLA.value = formSampleDict['CHLA_SAMPLE_ID'];
		if (formSampleDict['CHLA_FROZEN'] === 'Y') {
	        changeStateRadioButton (btn_radioFrozenCHLA,true);
	    } else {
	       changeStateRadioButton (btn_radioFrozenCHLA,false);
	    }
		tf_volFilterCHLA.value = formSampleDict['CHLA_VOLUME_FILTERED'];
		if (formSampleDict['CHLA_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedCHLA,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedCHLA,false);
	    }
		tf_commentCHLA.value = formSampleDict['CHLA_COMMENT']; 
		tf_sampleIDNUTS.value = formSampleDict['NUTS_SAMPLE_ID'];
	    if (formSampleDict['NUTS_CHILLED'] === 'Y') {
	        changeStateRadioButton (btn_radioChilledNUTS,true);
	    } else {
	       changeStateRadioButton (btn_radioChilledNUTS,false);
	    }
		if (formSampleDict['NUTS_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedNUTS,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedNUTS,false);
	    }
		tf_commentNUTS.value = formSampleDict['NUTS_COMMENT'];
		tf_sampleIDMICX.value = formSampleDict['MICX_SAMPLE_ID'];
		if (formSampleDict['MICX_FROZEN'] === 'Y') {
	       changeStateRadioButton (btn_radioFrozenMICX,true);
	    } else {
	       changeStateRadioButton (btn_radioFrozenMICX,false);
	    }
		if (formSampleDict['MICX_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedMICX,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedMICX,false);
	    }
		tf_commentMICX.value = formSampleDict['MICX_COMMENT'];
		tf_sampleIDALGX.value = formSampleDict['ALGX_SAMPLE_ID'];
        if (formSampleDict['ALGX_FROZEN'] === 'Y') {
           changeStateRadioButton (btn_radioFrozenALGX,true);
        } else {
           changeStateRadioButton (btn_radioFrozenALGX,false);
        }
        if (formSampleDict['ALGX_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedALGX,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedALGX,false);
        }
        tf_commentALGX.value = formSampleDict['ALGX_COMMENT'];  
		tf_sampleIDENTE.value =formSampleDict['ENTE_SAMPLE_ID'];
		tf_timeCollENTE.value = formSampleDict['ENTE_TIME_COLLECTED'];
		tf_depthCollENTE.value = formSampleDict['ENTE_DEPTH_COLLECTED'];
		tf_filtStartENTE.value = formSampleDict['ENTE_FILTER_START_TIME'];
		tf_filt1ENTE.value = formSampleDict['ENTE_FILTER_1'];
		tf_filt2ENTE.value = formSampleDict['ENTE_FILTER_2'];
		tf_sFilt1ENTE.value = formSampleDict['ENTE_BUFFER_RINSE_1'];
		tf_sFilt2ENTE.value = formSampleDict['ENTE_BUFFER_RINSE_2'];
		tf_filtEndENTE.value = formSampleDict['ENTE_FILTER_END_TIME'];
		tf_timeFrozENTE.value = formSampleDict['ENTE_TIME_FROZEN'];
		
	    if (formSampleDict['ENTE_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedENTE,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedENTE,false);
	    }
		if (formSampleDict['ENTE_BLANK_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioblankCollectedENTE,true);
	    } else {
	        changeStateRadioButton (btn_radioblankCollectedENTE,false);
	    }
		tf_commentENTE.value = formSampleDict['ENTE_COMMENT'];
		
		//check to see if site 'valxsite' is marine
		// - set stuff enabled=false
		// else
		// - set stuff like current
        formSiteDict = openFormSiteDict();
        retrieveJSON(formSiteDict,view.uid + '_SITEVERIFICATION.json');
  
		if (formSiteDict['VALXSITE'] === 'GREAT_LAKES') {
    		btn_radioNotCollectedPHYT.enabled = true;
    		lbl_notCollectedPHYT.color = 'black';    
    		lbl_sampleIDPHYT.color = 'black';
    		tf_sampleIDPHYT.enabled = true;
    		tf_sampleIDPHYT.value = formSampleDict['PHYT_SAMPLE_ID'];
    		lbl_preservedPHYT.color = 'black';
    		btn_radiopreservedPHYT.enabled = true;
    		lbl_depthCollPHYT.color = 'black';
    		tf_depthCollPHYT.enabled = true;
    		tf_depthCollPHYT.value = formSampleDict['PHYT_DEPTH_COLLECTED'];
    		lbl_timeCollPHYT.color = 'black';
    		tf_timeCollPHYT.enabled = true;
    		tf_timeCollPHYT.value = formSampleDict['PHYT_TIME_COLLECTED'];
    		lbl_timePresPHYT.color = 'black';
    		tf_timePresPHYT.enabled = true;
    		tf_timePresPHYT.value = formSampleDict['PHYT_TIME_PRESERVED'];
    		if (formSampleDict['PHYT_NOT_COLLECTED'] === 'Y') {
    		      changeStateRadioButton (btn_radioNotCollectedPHYT,true);
    		    } else {
    		      changeStateRadioButton (btn_radioNotCollectedPHYT,false);
    		    }
    		lbl_commentPHYT.color = 'black'; 
    		tf_commentPHYT.enable = true;   	
    		tf_commentPHYT.value = formSampleDict['PHYT_COMMENT'];
    		btn_radioNotCollectedUVID.enabled = true;
            lbl_notCollectedUVID.color = 'black';
            lbl_fileNameUVID.color = 'black';
            tf_fileNameUVID.enabled = true; 
    		tf_fileNameUVID.value = formSampleDict['UVID_FILENAME'];
    		btn_radiotransferredUVID.enabled = true;
            lbl_transferredUVID.color = 'black';
    		if (formSampleDict['UVID_NOT_COLLECTED'] === 'Y') {
    			  changeStateRadioButton (btn_radioNotCollectedUVID,true);
    			} else {
    			  changeStateRadioButton (btn_radioNotCollectedUVID,false);
    			}
    		if (formSampleDict['UVID_TRANSFERRED'] === 'Y') {
    			 changeStateRadioButton (btn_radiotransferredUVID,true);
    			} else {
    			 changeStateRadioButton (btn_radiotransferredUVID,false);
    			}
            lbl_commentUVID.color = 'black'; 
            tf_commentUVID.enable = true;
    		tf_commentUVID.value = formSampleDict['UVID_COMMENT'];
		
		 } else {
            //stuff here applies to the VALXSITE === MARINE case
            btn_radioNotCollectedPHYT.enabled = false;
            lbl_notCollectedPHYT.color = 'gray';    
            lbl_sampleIDPHYT.color = 'gray';
            tf_sampleIDPHYT.enabled = false;
            tf_sampleIDPHYT.value = '';
            lbl_preservedPHYT.color = 'gray';
            btn_radiopreservedPHYT.enabled = false;
            lbl_depthCollPHYT.color = 'gray';
            tf_depthCollPHYT.enabled = false;
            tf_depthCollPHYT.value = '';
            lbl_timeCollPHYT.color = 'gray';
            tf_timeCollPHYT.enabled = false;
            tf_timeCollPHYT.value = '';
            lbl_timePresPHYT.color = 'gray';
            tf_timePresPHYT.enabled = false;
            tf_timePresPHYT.value = '';
            if (formSampleDict['PHYT_NOT_COLLECTED'] === 'Y') {
                  changeStateRadioButton (btn_radioNotCollectedPHYT,true);
                } else {
                  changeStateRadioButton (btn_radioNotCollectedPHYT,false);
                }
            lbl_commentPHYT.color = 'gray'; 
            tf_commentPHYT.enable = false;       
            tf_commentPHYT.value = '';
            btn_radioNotCollectedUVID.enabled = false;
            lbl_notCollectedUVID.color = 'gray';
            lbl_fileNameUVID.color = 'gray';
            tf_fileNameUVID.enabled = false; 
            tf_fileNameUVID.value = '';
            btn_radiotransferredUVID.enabled = false;
            lbl_transferredUVID.color = 'gray';
            if (formSampleDict['UVID_NOT_COLLECTED'] === 'Y') {
                  changeStateRadioButton (btn_radioNotCollectedUVID,true);
                } else {
                  changeStateRadioButton (btn_radioNotCollectedUVID,false);
                }
            if (formSampleDict['UVID_TRANSFERRED'] === 'Y') {
                 changeStateRadioButton (btn_radiotransferredUVID,true);
                } else {
                 changeStateRadioButton (btn_radiotransferredUVID,false);
                }
            lbl_commentUVID.color = 'gray'; 
            tf_commentUVID.enable = false;
            tf_commentUVID.value = '';   
		 };    
		
		tf_grabBENT.value =	formSampleDict['BENT_GRAB_AREA'];
		tf_grabTypeBENT.value = formSampleDict['BENT_GRAB_TYPE'];
		tf_grabSizeBENT.value = formSampleDict['BENT_SIEVE_SIZE'];
		tf_grabNumBENT.value = formSampleDict['BENT_GRABS'];
	 	if (formSampleDict['BENT_NOT_COLLECTED'] === 'Y') {
			  changeStateRadioButton (btn_radioNotCollectedBENT,true);
			} else {
			  changeStateRadioButton (btn_radioNotCollectedBENT,false);
			}
		tf_sampleIDBENT.value = formSampleDict['BENT_SAMPLE_ID'];
		tf_sampleDepthBENT.value = formSampleDict['BENT_DEPTH'];
		tf_noJarBENT.value = formSampleDict['BENT_JAR_NO'];
		if (formSampleDict['BENT_PRESERVED'] === 'Y') {
			  changeStateRadioButton (btn_radioPreservedBENT,true);
			} else {
			  changeStateRadioButton (btn_radioPreservedBENT,false);
			}	
		tf_commentBENT.value = formSampleDict['BENT_COMMENT'];  	
	    if (formSampleDict['BENT_COLOR'] === 'BLACK' || formSampleDict['BENT_COLOR'] === 'BROWN' || 
	    formSampleDict['BENT_COLOR'] === 'LIGHT_BROWN' || formSampleDict['BENT_COLOR'] === 'DARK_BROWN' || 
	    formSampleDict['BENT_COLOR'] === 'GRAY') {
	        tf_sedColor.value = formSampleDict['BENT_COLOR'];
	    } else if (formSampleDict['BENT_COLOR'] !== '') {
	        tf_sedColor.value = 'OTHER';
	        tf_sedColorOther.value = formSampleDict['BENT_COLOR'];
	    } else {
	        tf_sedColor.value = '';
	        tf_sedColorOther.value = '';
	    }
	    if (formSampleDict['BENT_SUBSTRATE'] === 'SAND' || formSampleDict['BENT_SUBSTRATE'] === 'MUCK' || 
	    formSampleDict['BENT_SUBSTRATE'] === 'GRAVEL' || formSampleDict['BENT_SUBSTRATE'] === 'COBBLE' || 
	    formSampleDict['BENT_SUBSTRATE'] === 'SHELLHASH') {
	        tf_sedSubstrate.value = formSampleDict['BENT_SUBSTRATE'];
	    } else if (formSampleDict['BENT_SUBSTRATE'] !== '') {
	        tf_sedSubstrate.value = 'OTHER';
	        tf_sedSubstrateOther.value = formSampleDict['BENT_SUBSTRATE'];
	    } else {
	        tf_sedSubstrate.value = '';
	        tf_sedSubstrateOther.value = '';
	    }  	
	    if (formSampleDict['BENT_SMELL'] === 'FISHY' || formSampleDict['BENT_SMELL'] === 'CHEMICAL' || 
	    formSampleDict['BENT_SMELL'] === 'SULPHUR' || formSampleDict['BENT_SMELL'] === 'NONE') {
	        tf_sedSmell.value = formSampleDict['BENT_SMELL'];
	    } else if (formSampleDict['BENT_SMELL'] !== '') {
	        tf_sedSmell.value = 'OTHER';
	        tf_sedSmellOther.value = formSampleDict['BENT_SMELL'];
	    } else {
	        tf_sedSmell.value = '';
	        tf_sedSmellOther.value = '';
	    }
	    if (formSampleDict['BENT_SURFACE'] === 'FILM' || formSampleDict['BENT_SURFACE'] === 'FLOC' || 
	    formSampleDict['BENT_SURFACE'] === 'NOTHING_NOTED') {
	        tf_sedSurface.value = formSampleDict['BENT_SURFACE'];
	    } else if (formSampleDict['BENT_SURFACE'] !== '') {
	        tf_sedSurface.value = 'OTHER';
	        tf_sedSurfaceOther.value = formSampleDict['BENT_SURFACE'];
	    } else {
	        tf_sedSurface.value = '';
	        tf_sedSurfaceOther.value = '';
	    }  
	    tf_sedFauna.value = formSampleDict['BENT_VISIBLE_FAUNA'];
	    tf_sedFaunaType.value = formSampleDict['BENT_FAUNA_TYPE'];
	    tf_sedFlora.value = formSampleDict['BENT_VISIBLE_FLORA'];
	    tf_sedFloraType.value = formSampleDict['BENT_FLORA_TYPE'];
	    tf_sedoDist.value = formSampleDict['SEDO_DISTANCE'];
	    
        if (formSampleDict['SEDX_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedSEDX,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedSEDX,false);
        }
        tf_sampleIDSEDX.value = formSampleDict['SEDX_SAMPLE_ID'];
        if (formSampleDict['SEDX_CHILLED'] === 'Y') {
            changeStateRadioButton (btn_radioChilledSEDX,true);
        } else {
            changeStateRadioButton (btn_radioChilledSEDX,false);
        }
        tf_commentSEDX.value = formSampleDict['SEDX_COMMENT'];
	    
        if (formSampleDict['SEDO_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedSEDO,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedSEDO,false);
        }	    
	    tf_sampleIDSEDO.value = formSampleDict['SEDO_SAMPLE_ID'];
	    if (formSampleDict['SEDO_FROZEN'] === 'Y') {
	        changeStateRadioButton (btn_radioFrozenSEDO,true);
	    } else {
	        changeStateRadioButton (btn_radioFrozenSEDO,false);
	    }
	    tf_commentSEDO.value = formSampleDict['SEDO_COMMENT'];
	    if (formSampleDict['SEDC_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedSEDC,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedSEDC,false);
        }
        tf_sampleIDSEDC.value = formSampleDict['SEDC_SAMPLE_ID'];
        if (formSampleDict['SEDC_FROZEN'] === 'Y') {
            changeStateRadioButton (btn_radioFrozenSEDC,true);
        } else {
            changeStateRadioButton (btn_radioFrozenSEDC,false);
        }
        tf_commentSEDC.value = formSampleDict['SEDC_COMMENT'];
	    if (formSampleDict['SEDG_NOT_COLLECTED'] === 'Y') {
	        changeStateRadioButton (btn_radioNotCollectedSEDG,true);
	    } else {
	        changeStateRadioButton (btn_radioNotCollectedSEDG,false);
	    }
	    tf_sampleIDSEDG.value = formSampleDict['SEDG_SAMPLE_ID'];
	    if (formSampleDict['SEDG_CHILLED'] === 'Y') {
	        changeStateRadioButton (btn_radioChilledSEDG,true);
	    } else {
	        changeStateRadioButton (btn_radioChilledSEDG,false);
	    }
	    tf_commentSEDG.value = formSampleDict['SEDG_COMMENT']; 

    });
    view.addEventListener('updateSiteType',function(e){
        if (e.siteType == 'MARINE') {
            lbl_notCollectedPHYT.color = 'gray';
        } else {
            lbl_notCollectedPHYT.color = 'black';
        }
    });
    view.add(scrollView); 
    return view;

}

function setView_formFishEco(){
    var f = formatValues();
    var formFishEcoDict = openFormFishEcoDict();
    var formSampleDict = openFormSampleDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();

    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
    
    var hdr_fishEco = setHeader ('ECO FISH COLLECTION', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_fishEco); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var pickerWin = setPopupWindow();
    var picker = Ti.UI.createPicker({
        useSpinner:true,
        type:Ti.UI.PICKER_TYPE_DATE,
        minDate:new Date(2015,03,01),
        maxDate:new Date(2015,10,31),
        value:new Date(2015,3,12),
        top:50      
    });
   
    var pickerButton = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'black',
        height:50,
        width:150,
        title:'Add date',
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:18,fontWeight:'bold'},
    });
   
    pickerWin.add(picker);
    pickerWin.add(pickerButton);
    
    var lbl_actualDateFish = setLabelI ('Actual Date of Fish Collection',currentTop, f.colIndent,f.colWidth3);
    var tf_actualDateFish = setTextFieldNumber ('', currentTop, f.leftCol3_2, f.colWidth3, 'mmddyyyy');
    tf_actualDateFish.editable = false;
    btn_actualDate = setDropdownButton(elementTop, f.leftCol3_3);       
    scrollView.add (lbl_actualDateFish);
    scrollView.add (tf_actualDateFish);
    scrollView.add(btn_actualDate);
     
    var actualDateFishMeta = setMetaView('Select date of fish sampling IF different from date of site visit.');
    lbl_actualDateFish.addEventListener('click', function() {
        view.add(actualDateFishMeta);
        actualDateFishMeta.show();
    });
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    lbl_fishCrew = setLabelI('Is Fish crew different than site crew?',currentTop, f.colIndent);
    btn_radioFishCrew = new setRadioButton(elementTop,f.leftCol3_3,false);
    var fishCrewMeta = setMetaView('If the Fish Crew personnel is different from the site crew, check this button and fill in Fish Crew names');
    lbl_fishCrew.addEventListener('click', function() {
        view.add(fishCrewMeta);
        fishCrewMeta.show();
    });
    scrollView.add(lbl_fishCrew);
    scrollView.add(btn_radioFishCrew);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fishCLeader = setLabel('Fish crew leader:',currentTop,f.colIndent,f.colWidth3);
    lbl_fishCLeader.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_fishCLeader = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    tf_fishCLeader.enabled = false;
    scrollView.add(lbl_fishCLeader);
    scrollView.add(tf_fishCLeader);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fishCTaxonomist = setLabel('Fish taxonomist:',currentTop,f.colIndent,f.colWidth3);
    lbl_fishCTaxonomist.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_fishCTaxonomist = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    tf_fishCTaxonomist.enabled = false;
    scrollView.add(lbl_fishCTaxonomist);
    scrollView.add(tf_fishCTaxonomist);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fishCrew1 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_fishCrew1.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_fishCrew1 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    tf_fishCrew1.enabled = false;
    scrollView.add(lbl_fishCrew1);
    scrollView.add(tf_fishCrew1);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fishCrew2 = setLabel('Name:',currentTop,f.colIndent,f.colWidth3);
    lbl_fishCrew2.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
    tf_fishCrew2 = setTextField('',elementTop,f.leftCol3_2,f.colWidth3 + 20 + f.colWidth3);
    tf_fishCrew2.enabled = false;
    scrollView.add(lbl_fishCrew2);
    scrollView.add(tf_fishCrew2);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 

    btn_radioFishCrew.addEventListener('click',function() {
        switchRadioButton(btn_radioFishCrew);
        if (btn_radioFishCrew.state === true) {      
            tf_fishCLeader.enabled = true;
            tf_fishCTaxonomist.enabled = true;
            tf_fishCrew1.enabled = true;
            tf_fishCrew2.enabled = true;
            lbl_fishCLeader.color = 'black';
            lbl_fishCTaxonomist.color = 'black';
            lbl_fishCrew1.color = 'black';
            lbl_fishCrew2.color = 'black';
        }
        if (btn_radioFishCrew.state === false) {      
            tf_fishCLeader.enabled = false;
            tf_fishCTaxonomist.enabled = false;
            tf_fishCrew1.enabled = false;
            tf_fishCrew2.enabled = false;
            lbl_fishCLeader.color = 'gray';
            lbl_fishCTaxonomist.color = 'gray';
            lbl_fishCrew1.color = 'gray';
            lbl_fishCrew2.color = 'gray';
        }    
    });

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_collMethFish = setLabel('Collection Method:',currentTop,f.colIndent,f.colWidth4);
    lbl_collMethFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_collMethFish = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth);
    tf_collMethFish.editable = false;
    collMethFishData = ['TRAWL','GILL_NET','HOOK','DOCKSIDE','SEINE','OTHER'];
    collMethFishSelect = setSelectTableView(collMethFishData);
    btn_collMethFish = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_othMethFish = setLabel('Other Method:',currentTop, f.leftCol4_3, f.colWidth4);
    tf_othMethFish = setTextField('',elementTop, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    scrollView.add (lbl_collMethFish);
    scrollView.add (tf_collMethFish);
    scrollView.add (btn_collMethFish);
    scrollView.add(lbl_othMethFish);
    scrollView.add(tf_othMethFish);
    
    //button events
 
    btn_collMethFish.addEventListener('click', function() {
        popupWin.add(collMethFishSelect);
        popupWin.open();
    });
    collMethFishSelect.addEventListener('click',function(e){
        tf_collMethFish.value = e.rowData.rowValue;
        popupWin.remove(collMethFishSelect);
        popupWin.close();
    });  
       
    var hdr_trawlFish = setHeader ('TRAWL/SEINE INFO', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_trawlFish); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;    
           
    lbl_helmFish = setLabel('Helmsman:',currentTop,f.colIndent,f.colWidth3);   
    lbl_helmFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    lbl_lineFish = setLabel('Line out:',currentTop,f.leftCol3_2,f.colWidth3);   
    lbl_lineFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
      
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
    
    tf_helmFish = setTextFieldHint('',elementTop,f.colIndent,f.colWidth3,'Name');
    tf_lineFish = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'m');
 
    scrollView.add(lbl_helmFish);
    scrollView.add(lbl_lineFish);   
    scrollView.add(tf_helmFish);
    scrollView.add(tf_lineFish);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
     
    lbl_startFish = setLabel ('Trawl/Seine Start',currentTop, f.colIndent, f.colWidth3);
    lbl_headingFish = setLabel('Heading:',currentTop,f.leftCol3_2,f.colWidth3);   
    lbl_headingFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    lbl_seineLengthFish = setLabel('Length:',currentTop, f.leftCol3_3, f.colWidth3);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    tf_headingFish = setTextFieldNumber('',currentTop,f.leftCol3_2,f.colWidth3,'degrees magnetic');
    tf_seineLengthFish = setTextFieldNumber('',currentTop, f.leftCol3_3, f.colWidth3,'m');
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
        
    lbl_latStartFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longStartFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    lbl_startTimeFish = setLabel('Start Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_commentStartFish = setLabel('Comment:', currentTop, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    tf_latStartFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longStartFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    tf_startTimeFish = setTextFieldNumber('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_commentStartFish = setTextField('', currentTop, f.leftCol4_4, f.colWidth4,''); 
     
    scrollView.add(lbl_startFish);
    scrollView.add(lbl_headingFish);
    scrollView.add(lbl_seineLengthFish);
    scrollView.add(lbl_latStartFish);
    scrollView.add(lbl_longStartFish);
    scrollView.add(lbl_startTimeFish);
    scrollView.add(lbl_commentStartFish);
    scrollView.add(tf_headingFish);
    scrollView.add(tf_seineLengthFish);
    scrollView.add(tf_latStartFish);
    scrollView.add(tf_longStartFish);
    scrollView.add(tf_startTimeFish);
    scrollView.add(tf_commentStartFish);
    
     
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
     
    lbl_endFish = setLabel ('Trawl/Seine End',currentTop, f.colIndent, f.colWidth2);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    lbl_latEndFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longEndFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    lbl_endTimeFish = setLabel('End Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_commentEndFish = setLabel('Comment:', currentTop, f.leftCol4_4, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latEndFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longEndFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    tf_endTimeFish = setTextFieldNumber('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_commentEndFish = setTextField('', currentTop, f.leftCol4_4, f.colWidth4,''); 
         
    scrollView.add(lbl_endFish);
    scrollView.add(lbl_latEndFish);
    scrollView.add(lbl_longEndFish);
    scrollView.add(lbl_endTimeFish);
    scrollView.add(lbl_commentEndFish);
    scrollView.add(tf_latEndFish);
    scrollView.add(tf_longEndFish);
    scrollView.add(tf_endTimeFish);
    scrollView.add(tf_commentEndFish);
         
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
         
    lbl_seineFish = setLabel ('IF Hook:',currentTop, f.colIndent, f.colWidth3);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
    lbl_latSeine = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longSeine = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
//    lbl_seineLengthFish = setLabel('Length:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_seineCommFish = setLabel('Comment:', currentTop, f.leftCol4_3, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latSeine = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longSeine = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
//    tf_seineLengthFish = setTextFieldNumber('',currentTop, f.leftCol4_3, f.colWidth4,'m');
    tf_seineCommFish = setTextField('', currentTop, f.leftCol4_3, f.colWidth3,''); 
         
    scrollView.add(lbl_seineFish);
    scrollView.add(lbl_latSeine);
    scrollView.add(lbl_longSeine);
//    scrollView.add(lbl_seineLengthFish);
    scrollView.add(lbl_seineCommFish);
    scrollView.add(tf_latSeine);
    scrollView.add(tf_longEndFish);
    scrollView.add(tf_longSeine);
//    scrollView.add(tf_seineLengthFish);
    scrollView.add(tf_seineCommFish);
         
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
         
    lbl_gillFish = setLabel ('IF Gill Net:',currentTop, f.colIndent, f.colWidth3);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    lbl_latGill = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longGill = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latGill = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longGill = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_gillLengthFish = setLabel ('Length:',currentTop, f.colIndent, f.colWidth4);
    lbl_gillStartFish = setLabel ('Start Time:',currentTop, f.leftCol4_2, f.colWidth4);
    lbl_gillEndFish = setLabel ('End Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_gillCommFish = setLabel ('Comment:',currentTop, f.leftCol4_4, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    tf_gillLengthFish = setTextFieldNumber('',currentTop,f.colIndent, f.colWidth4,'m');
    tf_gillStartFish = setTextFieldNumber ('',currentTop, f.leftCol4_2, f.colWidth4,'hhmm');
    tf_gillEndFish = setTextFieldNumber ('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_gillCommFish = setTextField('',currentTop,f.leftCol4_4, f.colWidth4);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    scrollView.add(lbl_gillFish);
    scrollView.add(lbl_latGill);
    scrollView.add(lbl_longGill);
    scrollView.add(tf_latGill);
    scrollView.add(tf_longGill);
    scrollView.add(lbl_gillLengthFish);
    scrollView.add(lbl_gillStartFish);
    scrollView.add(lbl_gillEndFish);
    scrollView.add(lbl_gillCommFish);
    scrollView.add(tf_gillLengthFish);
    scrollView.add(tf_gillStartFish);
    scrollView.add(tf_gillEndFish);
    scrollView.add(tf_gillCommFish);
         
    //button events*/
    
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
    btn_actualDate.addEventListener('click', function() {
          pickerWin.open();
    });
    picker.addEventListener('change',function(e){
        tf_actualDateFish.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear();
    });
    pickerButton.addEventListener('click',function(){
         pickerWin.close();  
    });
    tf_actualDateFish.addEventListener(eventListener, function() {
        tf_actualDateFish.value = entryMask(tf_actualDateFish.value,'date');
    }); 
    tf_startTimeFish.addEventListener(eventListener, function() {
         tf_startTimeFish.value = entryMask(tf_startTimeFish.value,'time');
     });      
     tf_latStartFish.addEventListener(eventListener, function() {
         tf_latStartFish.value = entryMask(tf_latStartFish.value,'lat');
     });
     tf_longStartFish.addEventListener(eventListener, function() {
         tf_longStartFish.value = entryMask(tf_longStartFish.value,'lon');
     });
     tf_endTimeFish.addEventListener(eventListener, function() {
         tf_endTimeFish.value = entryMask(tf_endTimeFish.value,'time');
     });      
     tf_latEndFish.addEventListener(eventListener, function() {
         tf_latEndFish.value = entryMask(tf_latEndFish.value,'lat');
     });
     tf_longEndFish.addEventListener(eventListener, function() {
         tf_longEndFish.value = entryMask(tf_longEndFish.value,'lon');
     });
     tf_latSeine.addEventListener(eventListener, function() {
         tf_latSeine.value = entryMask(tf_latSeine.value,'lat');
     });
     tf_longSeine.addEventListener(eventListener, function() {
         tf_longSeine.value = entryMask(tf_longSeine.value,'lon');
     });
     tf_latGill.addEventListener(eventListener, function() {
         tf_latGill.value = entryMask(tf_latGill.value,'lat');
     });
     tf_longGill.addEventListener(eventListener, function() {
         tf_longGill.value = entryMask(tf_longGill.value,'lon');
     });
     tf_gillStartFish.addEventListener(eventListener, function() {
         tf_gillStartFish.value = entryMask(tf_gillStartFish.value,'time');
     });
     tf_gillEndFish.addEventListener(eventListener, function() {
         tf_gillEndFish.value = entryMask(tf_gillEndFish.value,'time');
     });
     
    var hdr_ftis = setHeader('Fish Tissue Sample (FTIS)',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(hdr_ftis);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var statenotcollFTIS = false;
    var btn_radioNotCollectedFTIS = new setRadioButton((elementTop),(f.colIndent),statenotcollFTIS);
    var lbl_notCollectedFTIS = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
   
    btn_radioNotCollectedFTIS.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedFTIS);
        if (btn_radioNotCollectedFTIS.state) {
            tf_sampleIDFTIS.value = '';
        } else {
            if (formSampleDict['CHEM_SAMPLE_ID'] != '') {
                tf_sampleIDFTIS.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 12);                
            }
        }
    });
    
    scrollView.add (lbl_notCollectedFTIS);
    scrollView.add (btn_radioNotCollectedFTIS);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var lbl_ftisSampID = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var tf_sampleIDFTIS = setTextFieldNumber ('', elementTop, f.leftCol4_2, f.colWidth4, '[Auto-populated]');
   
    scrollView.add (lbl_ftisSampID);
    scrollView.add (tf_sampleIDFTIS);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    var btn_ftisFishSize = setRadioButton(elementTop, f.colIndent, false);
    btn_ftisFishSize.addEventListener('click',function() {
        switchRadioButton(btn_ftisFishSize);
    });
    var lbl_ftisFishSize = setLabel ('Fish all within 75% of largest specimen', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_ftisFishSize);
    scrollView.add (lbl_ftisFishSize);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var btn_ftisFishSpecies = setRadioButton(elementTop, f.colIndent, false);
    btn_ftisFishSpecies.addEventListener('click',function() {
        switchRadioButton(btn_ftisFishSpecies);
    });
    var lbl_ftisFishSpecies = setLabel ('Fish all the same species', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_ftisFishSpecies,lbl_ftisFishSpecies);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var btn_ftisFish300 = setRadioButton(elementTop, f.colIndent, false);
    btn_ftisFish300.addEventListener('click',function() {
        switchRadioButton(btn_ftisFish300);
    });
    var lbl_ftisFish300 = setLabel ('Fish composite total mass is at least 300 grams', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_ftisFish300,lbl_ftisFish300);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    lbl_ftisSciName = setLabel ('Scientific Name (genus species)', currentTop, f.colIndent, f.colWidth3);
    lbl_ftisSciName.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_ftisSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Select genus species');
    tf_ftisSciName.editable = false;
    btn_ftisSciName = setDropdownButton(elementTop,f.leftCol3_2 + f.colWidth2 + f.buttonWidth);
    
    var fishListFile = openJSON('ui/jsonFiles/fishList.json');
    var ftisData = fishListFile.fishList;
    var ftisSelect = setSelectTableView(ftisData);
    
    btn_ftisSciName.addEventListener('click', function() {
        popupWin.add(ftisSelect);
        popupWin.open();    
    });
    ftisSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_ftisSciName.value = e.rowData.rowValue;
        popupWin.remove(ftisSelect);
        popupWin.close();
    });
       
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_ftisSciName);
    scrollView.add(tf_ftisSciName);
    scrollView.add(btn_ftisSciName);
    
    lbl_othftisSciName = setLabel('Other Name (if not on list)', currentTop, f.colIndent, f.colWidth3);
    lbl_othftisSciName.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_othftisSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Enter genus species');
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_othftisSciName);
    scrollView.add(tf_othftisSciName);

    
    //move frozen button here (AND comments), out of the array, it will apply to all samples   
       
    lbl_ftisFrozen = setLabel('Samples Frozen?',currentTop,f.colIndent,f.colWidth3);    
    btn_ftisFrozen = setRadioButton(elementTop, f.leftCol3_2, false); 
    var lbl_ftisComments = setLabel ('Comments', currentTop, f.leftCol3_3, f.colWidth3);
    
    scrollView.add (lbl_ftisFrozen);
    scrollView.add (btn_ftisFrozen);
    scrollView.add (lbl_ftisComments);
    
     btn_ftisFrozen.addEventListener('click',function() {
        switchRadioButton(btn_ftisFrozen);
    });   
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
     
    var tf_ftisComments = setTextFieldHint('', currentTop, f.leftCol3_3, f.colWidth3, 'Enter comments');
    scrollView.add (tf_ftisComments);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;   
       
    //create the list of depths 
    var tempArray = {};
    tempArray [1] = [1,'',''];
    view.depthArray = tempArray;    
 
    var btn_leftLine = setLeftButton(currentTop,f.colIndent);
    var tf_lineNo = setTextField('1',elementTop,f.colIndent + 50,f.colWidth4 - 50);
    var btn_rightLine = setRightButton(currentTop,f.leftCol4_2);
    
    scrollView.add(btn_leftLine);
    scrollView.add(tf_lineNo);
    scrollView.add(btn_rightLine);
    
    btn_leftLine.addEventListener('click',function(e){
        if (tf_lineNo.value > 0) {
            changeNum = Number(tf_lineNo.value) - 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
        }
    });
    btn_rightLine.addEventListener('click',function(e){
            changeNum = Number(tf_lineNo.value) + 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
//move comments up, out of the array      
    var lbl_ftisLength = setLabel ('Total length (mm)', currentTop, f.colIndent, f.colWidth3);  
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var tf_ftisLength = setTextFieldNumber('', currentTop, f.colIndent, f.colWidth3,'xxx'); 

    scrollView.add (lbl_ftisLength);
    scrollView.add (tf_ftisLength);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
 
    var hdr_fplg = setHeader('Fish Tissue Plug Sample (FPLG)',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(hdr_fplg);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var statenotcollFPLG = false;
    var btn_radioNotCollectedFPLG = new setRadioButton((elementTop),(f.colIndent),statenotcollFPLG);
    var lbl_notCollectedFPLG = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
   
    btn_radioNotCollectedFPLG.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedFPLG);
        if (btn_radioNotCollectedFPLG.state) {
            tf_sampleIDFPLG.value = '';
        }else{
            if (formSampleDict['CHEM_SAMPLE_ID'] != '') {
                tf_sampleIDFPLG.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 10);
            }
        }
    });
    
    scrollView.add (lbl_notCollectedFPLG,btn_radioNotCollectedFPLG);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var btn_radioSameFPLG = new setRadioButton((elementTop),(f.colIndent),statenotcollFPLG);
    var lbl_sameFPLG = setLabel ('FPLG sample collected from Eco Fish', currentTop, (f.colIndent + f.buttonWidth), f.colWidth1);
   
    btn_radioSameFPLG.addEventListener('click',function() {
        switchRadioButton(btn_radioSameFPLG);
        if (btn_radioSameFPLG.state) {
            lbl_collMethFplg.enabled = false;
            tf_collMethFplg.color = 'black';
            btn_collMethFplg.enabled = false;
            lbl_othMethFplg.color = 'black';
            tf_othMethFplg.enabled = false;
            btn_fplgFishSize.enabled = false;
            lbl_fplgFishSize.color = 'gray';
            btn_fplgFishSpecies.enabled = false;
            lbl_fplgFishSpecies.color = 'gray';
            btn_fplgFish300.enabled = false;
            lbl_fplgFish300.color = 'gray';
        } else {
            lbl_collMethFplg.enabled = true;
            tf_collMethFplg.color = 'black';
            btn_collMethFplg.enabled = true;
            lbl_othMethFplg.color = 'black';
            tf_othMethFplg.enabled = true;
            btn_fplgFishSize.enabled = true;
            lbl_fplgFishSize.color = 'black';
            btn_fplgFishSpecies.enabled = true;
            lbl_fplgFishSpecies.color = 'black';
            btn_fplgFish300.enabled = true;
            lbl_fplgFish300.color = 'black';
        }
    });
    
    scrollView.add (lbl_sameFPLG);
    scrollView.add (btn_radioSameFPLG);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_collMethFplg = setLabel('Collection Method:',currentTop,f.colIndent,f.colWidth4);
    lbl_collMethFplg.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_collMethFplg = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth);
    collMethFplgData = ['TRAWL','GILL_NET','HOOK','DOCKSIDE','SEINE','OTHER'];
    collMethFplgSelect = setSelectTableView(collMethFplgData);
    btn_collMethFplg = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_othMethFplg = setLabel('Other Method:',currentTop, f.leftCol4_3, f.colWidth4);
    tf_othMethFplg = setTextField('',elementTop, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    scrollView.add (lbl_collMethFplg);
    scrollView.add (tf_collMethFplg);
    scrollView.add (btn_collMethFplg);
    scrollView.add(lbl_othMethFplg);
    scrollView.add(tf_othMethFplg);
    
    //button events
 
    btn_collMethFplg.addEventListener('click', function() {
        popupWin.add(collMethFplgSelect);
        popupWin.open();
    });
    collMethFplgSelect.addEventListener('click',function(e){
        tf_collMethFplg.value = e.rowData.rowValue;
        popupWin.remove(collMethFplgSelect);
        popupWin.close();
    });  
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
       
    var btn_fplgFishSize = setRadioButton(elementTop, f.colIndent, false);
    btn_fplgFishSize.addEventListener('click',function() {
        switchRadioButton(btn_fplgFishSize);
    });
    var lbl_fplgFishSize = setLabel ('Fish all within 75% of largest specimen', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_fplgFishSize,lbl_fplgFishSize);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var btn_fplgFishSpecies = setRadioButton(elementTop, f.colIndent, false);
    btn_fplgFishSpecies.addEventListener('click',function() {
        switchRadioButton(btn_fplgFishSpecies);
    });
    var lbl_fplgFishSpecies = setLabel ('Fish all the same species', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_fplgFishSpecies,lbl_fplgFishSpecies);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var btn_fplgFish300 = setRadioButton(elementTop, f.colIndent, false);
    btn_fplgFish300.addEventListener('click',function() {
        switchRadioButton(btn_fplgFish300);
    });
    var lbl_fplgFish300 = setLabel ('Fish composite total mass is at least 300 grams', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_fplgFish300,lbl_fplgFish300);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_fplgSampID = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var tf_sampleIDFPLG = setTextFieldNumber ('', elementTop, f.leftCol4_2, f.colWidth4, '[Auto-populated]');
   
    scrollView.add (lbl_fplgSampID);
    scrollView.add (tf_sampleIDFPLG);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_fplgSciName = setLabel ('Scientific Name (genus species)', currentTop, f.colIndent, f.colWidth3);
    tf_fplgSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Select genus species');
    tf_fplgSciName.editable = false;
    btn_fplgSciName = setDropdownButton(elementTop,f.leftCol3_2 + f.colWidth2 + f.buttonWidth);
    
    fishListFile2 = openJSON('ui/jsonFiles/fishList.json');
    fplgData = fishListFile2.fishList;
    fplgSelect = setSelectTableView(fplgData);
    
    btn_fplgSciName.addEventListener('click', function() {
        popupWin.add(fplgSelect);
        popupWin.open();    
    });
    fplgSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_fplgSciName.value = e.rowData.rowValue;
        popupWin.remove(fplgSelect);
        popupWin.close();
    });
       
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_fplgSciName);
    scrollView.add(tf_fplgSciName);
    scrollView.add(btn_fplgSciName);
    
    lbl_othfplgSciName = setLabel('Other Name (if not on list)', currentTop, f.colIndent, f.colWidth3);
    lbl_othfplgSciName.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_othfplgSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Enter genus species');
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_othfplgSciName);
    scrollView.add(tf_othfplgSciName);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_fplgLength1 = setLabel ('Length (mm)', currentTop, f.leftCol3_2, f.colWidth3);
    var lbl_fplgWeight1 = setLabel('Weight (g)',currentTop, f.leftCol3_3, f.colWidth3);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var lbl_plug1 = setLabel ('Fish Plug #1', currentTop, f.colIndent, f.colWidth3);
    var tf_fplgLength1 = setTextFieldNumber ('', currentTop, f.leftCol3_2, f.colWidth3);
    var tf_fplgWeight1 = setTextFieldNumber('',currentTop, f.leftCol3_3, f.colWidth3);
   
    scrollView.add(lbl_fplgSampID);
    scrollView.add(lbl_fplgSciName);
    scrollView.add(tf_sampleIDFPLG);
    scrollView.add(tf_fplgSciName);
    scrollView.add(lbl_fplgLength1);
    scrollView.add(lbl_fplgWeight1);
    scrollView.add(lbl_plug1);
    scrollView.add(tf_fplgLength1);
    scrollView.add(tf_fplgWeight1);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var lbl_plug2 = setLabel ('Fish Plug #2', currentTop, f.colIndent, f.colWidth3);
    var tf_fplgLength2 = setTextFieldNumber ('', currentTop, f.leftCol3_2, f.colWidth3);
    var tf_fplgWeight2 = setTextFieldNumber('',currentTop, f.leftCol3_3, f.colWidth3);
    
    scrollView.add(lbl_plug2);
    scrollView.add(tf_fplgLength2);
    scrollView.add(tf_fplgWeight2);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_fplgComment = setLabel ('Comments', currentTop, f.colIndent, f.colWidth3);
    var tf_fplgComment = setTextField('',elementTop,f.leftCol3_2,f.colWidth2);
 
    scrollView.add (lbl_fplgComment);
    scrollView.add (tf_fplgComment);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    function changeLine(lineNo,changeNum){
        var tempArray = view.depthArray;
        if (!(changeNum in tempArray)){
            tempArray[changeNum] = [changeNum,'',''];
        }
        tempArray[lineNo][0] = tf_lineNo.value;
        tempArray[lineNo][1] = tf_ftisLength.value;         
        tf_ftisLength.value = tempArray[changeNum][1];
        view.depthArray = tempArray;
    };    
 

    btn_update.addEventListener('click', function() {
        formFishEcoDict['ACTUAL_DATE'] = tf_actualDateFish.value;
        
        if (btn_radioFishCrew === true) {formFishEcoDict['FISH_CREW'] = 'Y';}
        if (btn_radioFishCrew === false) {formFishEcoDict['FISH_CREW'] = 'N';}
        formFishEcoDict['FISH_CREW_LEADER'] = tf_fishCLeader.value;
        formFishEcoDict['FISH_CREW_TAXONOMIST'] = tf_fishCTaxonomist.value;
        formFishEcoDict['FISH_CREW_1'] = tf_fishCrew1.value;
        formFishEcoDict['FISH_CREW_2'] = tf_fishCrew2.value;
        if (tf_collMethFish.value === 'OTHER') {
            formFishEcoDict['COLLECTION_METHOD'] = tf_othMethFish.value;
            } else {
            formFishEcoDict['COLLECTION_METHOD'] = tf_collMethFish.value;
            }
        formFishEcoDict['HELMSMAN'] = tf_helmFish.value;
        formFishEcoDict['LINE_OUT'] = tf_lineFish.value;
        formFishEcoDict['HEADING'] = tf_headingFish.value;
        formFishEcoDict['LAT_DD_TRAWL_START'] = tf_latStartFish.value;
        formFishEcoDict['LON_DD_TRAWL_START'] = tf_longStartFish.value;
        formFishEcoDict['TRAWL_START'] = tf_startTimeFish.value;
        formFishEcoDict['TRAWL_START_COMMENT'] = tf_commentStartFish.value;
        formFishEcoDict['LAT_DD_TRAWL_END'] = tf_latEndFish.value;
        formFishEcoDict['LON_DD_TRAWL_END'] = tf_longEndFish.value; 
        formFishEcoDict['TRAWL_END'] = tf_endTimeFish.value;
        formFishEcoDict['TRAWL_END_COMMENT'] = tf_commentEndFish.value;
        formFishEcoDict['LAT_DD_HOOK'] = tf_latSeine.value;
        formFishEcoDict['LON_DD_HOOK'] = tf_longSeine.value;
        formFishEcoDict['LAT_DD_GILL'] = tf_latGill.value;
        formFishEcoDict['LON_DD_GILL'] = tf_longGill.value;
        formFishEcoDict['TRAWL_LENGTH'] = tf_seineLengthFish.value;
        formFishEcoDict['HOOK_COMMENT'] = tf_seineCommFish.value;
        formFishEcoDict['GILL_LENGTH'] = tf_gillLengthFish.value;
        formFishEcoDict['GILL_START'] = tf_gillStartFish.value;
        formFishEcoDict['GILL_END'] = tf_gillEndFish.value;
        formFishEcoDict['GILL_COMMENT'] = tf_gillCommFish.value;
        formFishEcoDict['FTIS_COMMENT']= tf_ftisComments.value; 

        var tempArray = view.depthArray;
        tempArray[Number(tf_lineNo.value)][0] = tf_lineNo.value;
        tempArray[Number(tf_lineNo.value)][1] = tf_ftisLength.value;
         
        //now prepare dictionary
        formFishEcoDict['FTIS_SAMPLE_ID'] = tf_sampleIDFTIS.value;
      
        if (btn_radioNotCollectedFTIS.state) {
            formFishEcoDict['FTIS_NOT_COLLECTED'] = 'Y';
        } else {
            formFishEcoDict['FTIS_NOT_COLLECTED'] = 'N';
        }
        if (btn_ftisFishSize.state) {
            formFishEcoDict['FTIS_FISH_SIZE'] = 'Y';
        } else {
            formFishEcoDict['FTIS_FISH_SIZE'] = 'N';
        }
        if (btn_ftisFishSpecies.state) {
            formFishEcoDict['FTIS_FISH_SPECIES'] = 'Y';
        } else {
            formFishEcoDict['FTIS_FISH_SPECIES'] = 'N';
        }
        if (btn_ftisFish300.state) {
            formFishEcoDict['FTIS_FISH_300'] = 'Y';
        } else {
            formFishEcoDict['FTIS_FISH_300'] = 'N';
        }
        if (btn_ftisFrozen.state) {
            formFishEcoDict['FTIS_FROZEN'] = 'Y';
        } else {
            formFishEcoDict['FTIS_FROZEN'] = 'N';
        }
        if (tf_ftisSciName.value === 'OTHER') {
            formFishEcoDict['FTIS_NAME_SCI'] = tf_othftisSciName.value;
        } else {
            formFishEcoDict['FTIS_NAME_SCI'] = tf_ftisSciName.value;
        }
        view.depthArray = tempArray;
        var size = 0, key;
        for (key in view.depthArray) {
            if (view.depthArray.hasOwnProperty(key)) size++;
        }
        for (var i = 1; i < size+1; i++) {
            formFishEcoDict['LINE_' + String(i)] = view.depthArray[i][0];
            formFishEcoDict['TTL_LENGTH_' + String(i)] = view.depthArray[i][1];
        }
        formFishEcoDict['FPLG_SAMPLE_ID'] = tf_sampleIDFPLG.value;
      
        if (btn_radioNotCollectedFPLG.state) {
            formFishEcoDict['FPLG_NOT_COLLECTED'] = 'Y';
        } else {
            formFishEcoDict['FPLG_NOT_COLLECTED'] = 'N';
        }
        if (btn_fplgFishSize.state) {
            formFishEcoDict['FPLG_FISH_SIZE'] = 'Y';
        } else {
            formFishEcoDict['FPLG_FISH_SIZE'] = 'N';
        }
        if (btn_fplgFishSpecies.state) {
            formFishEcoDict['FPLG_FISH_SPECIES'] = 'Y';
        } else {
            formFishEcoDict['FPLG_FISH_SPECIES'] = 'N';
        }
        if (btn_fplgFish300.state) {
            formFishEcoDict['FPLG_FISH_300'] = 'Y';
        } else {
            formFishEcoDict['FPLG_FISH_300'] = 'N';
        }
        if (tf_fplgSciName.value === 'OTHER') {
            formFishEcoDict['FPLG_NAME_SCI'] = tf_othfplgSciName.value;
        } else {
            formFishEcoDict['FPLG_NAME_SCI'] = tf_fplgSciName.value;
        }
        if (tf_collMethFplg.value === 'OTHER') {
            formFishEcoDict['FPLG_COLLECTION_METHOD'] = tf_othMethFplg.value;
        } else {
            formFishEcoDict['FPLG_COLLECTION_METHOD'] = tf_collMethFplg.value;
        }
 
//        formFishEcoDict['FPLG_NAME_SCI'] = tf_ftisSciName.value; 
        formFishEcoDict['FPLG_LENGTH_1'] = tf_fplgLength1.value; 
        formFishEcoDict['FPLG_WEIGHT_1'] = tf_fplgWeight1.value; 
        formFishEcoDict['FPLG_COMMENT'] = tf_fplgComment.value; 
        formFishEcoDict['FPLG_LENGTH_2'] = tf_fplgLength2.value; 
        formFishEcoDict['FPLG_WEIGHT_2'] = tf_fplgWeight2.value; 
     
       
        saveJSON(formFishEcoDict,view.uid + '_FISHECO.json');      
        saveJSON(view.depthArray,view.uid + '_FISHECO_lineInfo.json');
        view.fireEvent('chemIDUpdated', {
            siteid:view.siteid,
            visitno:view.visitno,
        });
    });
   

    view.addEventListener("updateFormFishEco",function(e) {
        //reset dictionary
        formFishEcoDict = openFormFishEcoDict();
        formSampleDict = openFormSampleDict();
        view.siteid = e.siteid;
        view.visitno = e.visitno;
        view.uid = e.siteid + '_' + e.visitno;
        
        changeStateRadioButton(btn_radioNotCollectedFTIS,false);
        tf_sampleIDFTIS.value = '';
        changeStateRadioButton(btn_ftisFishSize,false);
        changeStateRadioButton(btn_ftisFishSpecies,false);
        changeStateRadioButton(btn_ftisFish300,false);
        changeStateRadioButton(btn_ftisFrozen,false);
        tf_ftisSciName.value = '';
        changeStateRadioButton(btn_radioNotCollectedFPLG,false);
        tf_sampleIDFPLG.value = '';
        tf_collMethFish.value = '';
        changeStateRadioButton(btn_radioSameFPLG,false);
        changeStateRadioButton(btn_fplgFishSize,false);
        changeStateRadioButton(btn_fplgFishSpecies,false);
        changeStateRadioButton(btn_fplgFish300,false);
        tf_fplgSciName.value = '';
        tf_fplgLength1.value = '';
        tf_fplgWeight1.value = '';
        tf_fplgLength2.value = '';
        tf_fplgWeight2.value = '';
        tf_fplgComment.value = '';
           
         
        retrieveJSON(formFishEcoDict,view.uid + '_FISHECO.json');
        retrieveJSON(formSampleDict,view.uid + '_SAMPLECOLLECTION.json');    
        //populate values from json-populated dictionary
        tf_actualDateFish.value = formFishEcoDict['ACTUAL_DATE'];
        tf_fishCLeader.value = formFishEcoDict['FISH_CREW_LEADER'];
        tf_fishCTaxonomist.value = formFishEcoDict['FISH_CREW_TAXONOMIST'];
        tf_fishCrew1.value = formFishEcoDict['FISH_CREW_1'];
        tf_fishCrew2.value = formFishEcoDict['FISH_CREW_2'];
        if (formFishEcoDict['COLLECTION_METHOD'] === 'TRAWL' || formFishEcoDict['COLLECTION_METHOD'] === 'GILL_NET' || 
        	formFishEcoDict['COLLECTION_METHOD'] === 'HOOK' || formFishEcoDict['COLLECTION_METHOD'] === 'DOCKSIDE' || 
        	formFishEcoDict['COLLECTION_METHOD'] === 'SEINE'|| 
        	formFishEcoDict['COLLECTION_METHOD'] === 'OTHER') {
            tf_collMethFish.value = formFishEcoDict['COLLECTION_METHOD'];
        } else if (formFishEcoDict['COLLECTION_METHOD'] !== '') {
            tf_collMethFish.value = 'OTHER';
            tf_othMethFish.value = formFishEcoDict['COLLECTION_METHOD'];
        } else {
            tf_collMethFish.value = '';
            tf_othMethFish.value = '';
        }
        tf_helmFish.value = formFishEcoDict['HELMSMAN'];
        tf_lineFish.value = formFishEcoDict['LINE_OUT'];
        tf_headingFish.value = formFishEcoDict['HEADING'];
        tf_latStartFish.value =formFishEcoDict['LAT_DD_TRAWL_START'];
        tf_longStartFish.value = formFishEcoDict['LON_DD_TRAWL_START'];
        tf_startTimeFish.value = formFishEcoDict['TRAWL_START'];
        tf_commentStartFish.value = formFishEcoDict['TRAWL_START_COMMENT'];
        tf_latEndFish.value = formFishEcoDict['LAT_DD_TRAWL_END'];
        tf_longEndFish.value = formFishEcoDict['LON_DD_TRAWL_END'];
        tf_endTimeFish.value = formFishEcoDict['TRAWL_END'];
        tf_commentEndFish.value = formFishEcoDict['TRAWL_END_COMMENT'];
        tf_latSeine.value =  formFishEcoDict['LAT_DD_HOOK'];
        tf_longSeine.value = formFishEcoDict['LON_DD_HOOK'];
        tf_latGill.value = formFishEcoDict['LAT_DD_GILL'];
        tf_longGill.value = formFishEcoDict['LON_DD_GILL'];
        tf_seineLengthFish.value = formFishEcoDict['TRAWL_LENGTH'];
        tf_seineCommFish.value = formFishEcoDict['HOOK_COMMENT'];
        tf_gillLengthFish.value = formFishEcoDict['GILL_LENGTH'];
        tf_gillStartFish.value = formFishEcoDict['GILL_START']; 
        tf_gillEndFish.value = formFishEcoDict['GILL_END'];
        tf_gillCommFish.value = formFishEcoDict['GILL_COMMENT'];
        tf_ftisComments.value = formFishEcoDict['FTIS_COMMENT'];
        if (formFishEcoDict['FISH_CREW'] === 'Y') {
            changeStateRadioButton (btn_radioFishCrew,true);
        } else {
            changeStateRadioButton (btn_radioFishCrew,false);
        } 
  
        if (formFishEcoDict['FTIS_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedFTIS,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedFTIS,false);
            if (formSampleDict['CHEM_SAMPLE_ID'] !== '') {
                tf_sampleIDFTIS.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 12);
            } else {
            	tf_sampleIDFTIS.value = '';
            }
        }       
               
        if (formFishEcoDict['FTIS_FISH_SIZE'] === 'Y') {
              changeStateRadioButton(btn_ftisFishSize,true);
        }
        if (formFishEcoDict['FTIS_FISH_SPECIES'] === 'Y') {
              changeStateRadioButton(btn_ftisFishSpecies,true);
        }
        if (formFishEcoDict['FTIS_FISH_300'] === 'Y') {
              changeStateRadioButton(btn_ftisFish300,true);
        }
        if (formFishEcoDict['FTIS_FROZEN'] === 'Y') {
              changeStateRadioButton(btn_ftisFrozen,true);
        }
        
        var ftisFileReturn = openJSON('ui/jsonFiles/fishList.json');
        var ftisDataReturn = ftisFileReturn.fishList;
        if (ftisDataReturn.indexOf  (formFishEcoDict['FTIS_NAME_SCI'])) {
            tf_ftisSciName.value = formFishEcoDict['FTIS_NAME_SCI'];
            //alert ('In the list');
        } else if (formFishEcoDict['FTIS_NAME_SCI'] !== '') {
            //alert ('not in the list');
            tf_ftisSciName.value = 'OTHER';
            tf_othftisSciName.value = formFishEcoDict['FTIS_NAME_SCI'];
        } else {
            tf_ftisSciName.value = '';
            tf_othftisSciName.value = '';
        }
        tf_ftisSciName.value = formFishEcoDict['FTIS_NAME_SCI'];
          
        //line data
        tf_lineNo.value = '1';
        tf_ftisLength.value = '';
        view.depthArray = {};
        var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_FISHECO_lineInfo.json');
        if (jsonFile.exists()) {
          var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_FISHECO_lineInfo.json');
          var data = jsonFile.read().text;
          view.depthArray = JSON.parse(data);
          tf_ftisLength.value = view.depthArray[1][1];             
        } else {
          var tempArray = {};
          tempArray[1] = ['1','','',''];           
          view.depthArray = tempArray;
        }
          
        //fish plug
     
        if (formFishEcoDict['FPLG_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedFPLG,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedFPLG,false);
            if (formSampleDict['CHEM_SAMPLE_ID'] !== '') {
                tf_sampleIDFPLG.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 10);
            } else {
            	tf_sampleIDFPLG.value = '';
            }
        } 
        if (formFishEcoDict['FPLG_FROM_FTIS'] === 'Y') {
            changeStateRadioButton (btn_radioSameFPLG,true);
            if (btn_radioSameFPLG.state) {
                lbl_collMethFplg.enabled = false;
                tf_collMethFplg.color = 'black';
                btn_collMethFplg.enabled = false;
                lbl_othMethFplg.color = 'black';
                tf_othMethFplg.enabled = false;
                btn_fplgFishSize.enabled = false;
                lbl_fplgFishSize.color = 'gray';
                btn_fplgFishSpecies.enabled = false;
                lbl_fplgFishSpecies.color = 'gray';
                btn_fplgFish300.enabled = false;
                lbl_fplgFish300.color = 'gray';
            }
        } else {
            changeStateRadioButton (btn_radioSameFPLG,false);
            lbl_collMethFplg.enabled = true;
            tf_collMethFplg.color = 'black';
            btn_collMethFplg.enabled = true;
            lbl_othMethFplg.color = 'black';
            tf_othMethFplg.enabled = true;
            btn_fplgFishSize.enabled = true;
            lbl_fplgFishSize.color = 'black';
            btn_fplgFishSpecies.enabled = true;
            lbl_fplgFishSpecies.color = 'black';
            btn_fplgFish300.enabled = true;
            lbl_fplgFish300.color = 'black';        
        } 
        if (formFishEcoDict['FPLG_FISH_SIZE'] === 'Y') {
              changeStateRadioButton(btn_fplgFishSize,true);
        }
        if (formFishEcoDict['FPLG_FISH_SPECIES'] === 'Y') {
              changeStateRadioButton(btn_fplgFishSpecies,true);
        }
        if (formFishEcoDict['FPLG_FISH_300'] === 'Y') {
              changeStateRadioButton(btn_fplgFish300,true);
        }
        if (formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'TRAWL' || formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'GILL_NET' || 
        formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'HOOK' || formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'DOCKSIDE' || 
        formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'SEINE' ||formFishEcoDict['FPLG_COLLECTION_METHOD'] === 'OTHER') {
            tf_collMethFplg.value = formFishEcoDict['FPLG_COLLECTION_METHOD'];
        } else if (formFishEcoDict['FPLG_COLLECTION_METHOD'] !== '') {
            tf_collMethFplg.value = 'OTHER';
            tf_othMethFplg.value = formFishEcoDict['FPLG_COLLECTION_METHOD'];
        } else {
            tf_collMethFplg.value = '';
            tf_othMethFplg.value = '';
        }
       
        fplgFileReturn2 = openJSON('ui/jsonFiles/fishList.json');
        fplgDataReturn2 = fplgFileReturn2.fishList;
        if (fplgDataReturn2.indexOf  (formFishEcoDict['FPLG_NAME_SCI'])) {
            tf_fplgSciName.value = formFishEcoDict['FPLG_NAME_SCI'];
            //alert ('In the list');
        } else if (formFishEcoDict['FPLG_NAME_SCI'] !== '') {
            //alert ('not in the list');
            tf_fplgSciName.value = 'OTHER';
            tf_othfplgSciName.value = formFishEcoDict['FPLG_NAME_SCI'];
        } else {
            tf_fplgSciName.value = '';
            tf_othfplgSciName.value = '';
        }
        tf_fplgSciName.value = formFishEcoDict['FPLG_NAME_SCI'];
          
       
        tf_fplgSciName.value = formFishEcoDict['FPLG_NAME_SCI'];
        tf_fplgLength1.value = formFishEcoDict['FPLG_LENGTH_1'];
        tf_fplgWeight1.value = formFishEcoDict['FPLG_WEIGHT_1'];
        tf_fplgLength2.value = formFishEcoDict['FPLG_LENGTH_2'];
        tf_fplgWeight2.value = formFishEcoDict['FPLG_WEIGHT_2'];
        tf_fplgComment.value = formFishEcoDict['FPLG_COMMENT'];
        
    });
       
    view.add(scrollView);
    return view;
}   

function setView_formFishHuman(){
    var f = formatValues();
    var formFishHumanDict = openFormFishHumanDict();
    var formSampleDict = openFormSampleDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();

    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
      
    var hdr_fishHuman = setHeader ('HUMAN HEALTH FISH COLLECTION', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_fishHuman); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    var pickerWin = setPopupWindow();
    var picker = Ti.UI.createPicker({
        useSpinner:true,
        type:Ti.UI.PICKER_TYPE_DATE,
        minDate:new Date(2015,03,01),
        maxDate:new Date(2015,10,31),
        value:new Date(2015,3,12),
        top:50      
    });
   
    var pickerButton = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'black',
        height:50,
        width:150,
        title:'Add date',
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:18,fontWeight:'bold'},
    });
   
    pickerWin.add(picker);
    pickerWin.add(pickerButton);   
    
    var lbl_actualDateHFish = setLabelI ('Actual Date of Fish Collection',currentTop, f.colIndent,f.colWidth3);
    var tf_actualDateHFish = setTextFieldNumber ('', currentTop, f.leftCol3_2, f.colWidth3, 'mmddyyyy');
    tf_actualDateHFish.editable = false;
    btn_actualDateHFish = setDropdownButton(elementTop, f.leftCol3_3);       
    scrollView.add (lbl_actualDateHFish);
    scrollView.add (tf_actualDateHFish);
    scrollView.add(btn_actualDateHFish);
     
    var actualDateHFishMeta = setMetaView('Select date of fish sampling IF different from date of site visit.');
    lbl_actualDateHFish.addEventListener('click', function() {
        view.add(actualDateHFishMeta);
        actualDateHFishMeta.show();
    });
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    
    lbl_collMethHFish = setLabel('Collection Method:',currentTop,f.colIndent,f.colWidth4);
    lbl_collMethHFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_collMethHFish = setTextField('',elementTop,f.leftCol4_2,f.colWidth4 - f.buttonWidth);
    tf_collMethHFish.editable = false;
    collMethHFishData = ['TRAWL','GILL_NET','HOOK','DOCKSIDE','SEINE','OTHER'];
    collMethHFishSelect = setSelectTableView(collMethHFishData);
    btn_collMethHFish = setDropdownButton(elementTop,f.leftCol4_2 + f.colWidth4 - f.buttonWidth);
    lbl_othMethHFish = setLabel('Other Method:',currentTop, f.leftCol4_3, f.colWidth4);
    tf_othMethHFish = setTextField('',elementTop, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    scrollView.add (lbl_collMethHFish);
    scrollView.add (tf_collMethHFish);
    scrollView.add (btn_collMethHFish);
    scrollView.add(lbl_othMethHFish);
    scrollView.add(tf_othMethHFish);
    
    //button events
 
    btn_collMethHFish.addEventListener('click', function() {
        popupWin.add(collMethHFishSelect);
        popupWin.open();
    });
    collMethHFishSelect.addEventListener('click',function(e){
        tf_collMethHFish.value = e.rowData.rowValue;
        popupWin.remove(collMethHFishSelect);
        popupWin.close();
    });  

    
    var hdr_trawlHFish = setHeader ('TRAWL/SEINE INFO', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_trawlHFish); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;    
           
    lbl_helmHFish = setLabel('Helmsman:',currentTop,f.colIndent,f.colWidth3);   
    lbl_helmHFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    lbl_lineHFish = setLabel('Line out:',currentTop,f.leftCol3_2,f.colWidth3);   
    lbl_lineHFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
      
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
    
    tf_helmHFish = setTextFieldHint('',elementTop,f.colIndent,f.colWidth3,'Name');
    tf_lineHFish = setTextFieldNumber('',elementTop,f.leftCol3_2,f.colWidth3,'m');
 
    scrollView.add(lbl_helmHFish);
    scrollView.add(lbl_lineHFish);   
    scrollView.add(tf_helmHFish);
    scrollView.add(tf_lineHFish);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
     
    lbl_startHFish = setLabel ('Trawl/Seine Start',currentTop, f.colIndent, f.colWidth3);
    lbl_headingHFish = setLabel('Heading:',currentTop,f.leftCol3_2,f.colWidth3);   
    lbl_headingHFish.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    lbl_seineLengthHFish = setLabel('Length:',currentTop, f.leftCol3_3, f.colWidth3);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    tf_headingHFish = setTextFieldNumber('',currentTop,f.leftCol3_2,f.colWidth3,'degrees magnetic');
    tf_seineLengthHFish = setTextFieldNumber('',currentTop, f.leftCol3_3, f.colWidth3,'m');
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
        
    lbl_latStartHFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longStartHFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    lbl_startTimeHFish = setLabel('Start Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_commentStartHFish = setLabel('Comment:', currentTop, f.leftCol4_4, f.colWidth4);
    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    tf_latStartHFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longStartHFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    tf_startTimeHFish = setTextFieldNumber('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_commentStartHFish = setTextField('', currentTop, f.leftCol4_4, f.colWidth4,''); 
     
    scrollView.add(lbl_startHFish);
    scrollView.add(lbl_headingHFish);
    scrollView.add(lbl_seineLengthHFish);
    scrollView.add(lbl_latStartHFish);
    scrollView.add(lbl_longStartHFish);
    scrollView.add(lbl_startTimeHFish);
    scrollView.add(lbl_commentStartHFish);
    scrollView.add(tf_headingHFish);
    scrollView.add(tf_seineLengthHFish);
    scrollView.add(tf_latStartHFish);
    scrollView.add(tf_longStartHFish);
    scrollView.add(tf_startTimeHFish);
    scrollView.add(tf_commentStartHFish);
         
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
     
    lbl_endHFish = setLabel ('Trawl/Seine End',currentTop, f.colIndent, f.colWidth2);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    lbl_latEndHFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longEndHFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    lbl_endTimeHFish = setLabel('End Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_commentEndHFish = setLabel('Comment:', currentTop, f.leftCol4_4, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latEndHFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longEndHFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    tf_endTimeHFish = setTextFieldNumber('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_commentEndHFish = setTextField('', currentTop, f.leftCol4_4, f.colWidth4,''); 
         
    scrollView.add(lbl_endHFish);
    scrollView.add(lbl_latEndHFish);
    scrollView.add(lbl_longEndHFish);
    scrollView.add(lbl_endTimeHFish);
    scrollView.add(lbl_commentEndHFish);
    scrollView.add(tf_latEndHFish);
    scrollView.add(tf_longEndHFish);
    scrollView.add(tf_endTimeHFish);
    scrollView.add(tf_commentEndHFish);
         
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
         
    lbl_seineHFish = setLabel ('IF Hook:',currentTop, f.colIndent, f.colWidth3);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
    lbl_latSeineHFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longSeineHFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);

    lbl_seineCommHFish = setLabel('Comment:', currentTop, f.leftCol4_3, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latSeineHFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longSeineHFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    tf_seineCommHFish = setTextField('', currentTop, f.leftCol4_3, f.colWidth3,''); 
         
    scrollView.add(lbl_seineHFish);
    scrollView.add(lbl_latSeineHFish);
    scrollView.add(lbl_longSeineHFish);

    scrollView.add(lbl_seineCommHFish);
    scrollView.add(tf_latSeineHFish);
    scrollView.add(tf_longEndHFish);
    scrollView.add(tf_longSeineHFish);
    scrollView.add(tf_seineCommHFish);
         
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
         
    lbl_gillHFish = setLabel ('IF Gill Net:',currentTop, f.colIndent, f.colWidth3);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    lbl_latGillHFish = setLabel('Latitude:',currentTop, f.colIndent, f.colWidth4);
    lbl_longGillHFish = setLabel('Longitude:', currentTop, f.leftCol4_2, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    tf_latGillHFish = setTextFieldNumber ('',currentTop, f.colIndent, f.colWidth4,'xx.xxxxxx');
    tf_longGillHFish = setTextFieldNumber('', currentTop, f.leftCol4_2, f.colWidth4,'xxx.xxxxx');
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    lbl_gillLengthHFish = setLabel ('Length:',currentTop, f.colIndent, f.colWidth4);
    lbl_gillStartHFish = setLabel ('Start Time:',currentTop, f.leftCol4_2, f.colWidth4);
    lbl_gillEndHFish = setLabel ('End Time:',currentTop, f.leftCol4_3, f.colWidth4);
    lbl_gillCommHFish = setLabel ('Comment:',currentTop, f.leftCol4_4, f.colWidth4);
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    tf_gillLengthHFish = setTextFieldNumber('',currentTop,f.colIndent, f.colWidth4,'m');
    tf_gillStartHFish = setTextFieldNumber ('',currentTop, f.leftCol4_2, f.colWidth4,'hhmm');
    tf_gillEndHFish = setTextFieldNumber ('',currentTop, f.leftCol4_3, f.colWidth4,'hhmm');
    tf_gillCommHFish = setTextField('',currentTop,f.leftCol4_4, f.colWidth4);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    scrollView.add(lbl_gillHFish);
    scrollView.add(lbl_latGillHFish);
    scrollView.add(lbl_longGillHFish);
    scrollView.add(tf_latGillHFish);
    scrollView.add(tf_longGillHFish);
    scrollView.add(lbl_gillLengthHFish);
    scrollView.add(lbl_gillStartHFish);
    scrollView.add(lbl_gillEndHFish);
    scrollView.add(lbl_gillCommHFish);
    scrollView.add(tf_gillLengthHFish);
    scrollView.add(tf_gillStartHFish);
    scrollView.add(tf_gillEndHFish);
    scrollView.add(tf_gillCommHFish);
         
    //button events*/
    
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
    btn_actualDateHFish.addEventListener('click', function() {
          pickerWin.open();
    });
    picker.addEventListener('change',function(e){
        tf_actualDateHFish.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear();
    });
    pickerButton.addEventListener('click',function(){
         pickerWin.close();  
    });
    tf_actualDateHFish.addEventListener(eventListener, function() {
        tf_actualDateHFish.value = entryMask(tf_actualDateHFish.value,'date');
    }); 
    tf_startTimeHFish.addEventListener(eventListener, function() {
         tf_startTimeHFish.value = entryMask(tf_startTimeHFish.value,'time');
     });      
     tf_latStartHFish.addEventListener(eventListener, function() {
         tf_latStartHFish.value = entryMask(tf_latStartHFish.value,'lat');
     });
     tf_longStartHFish.addEventListener(eventListener, function() {
         tf_longStartHFish.value = entryMask(tf_longStartHFish.value,'lon');
     });
     tf_endTimeHFish.addEventListener(eventListener, function() {
         tf_endTimeHFish.value = entryMask(tf_endTimeHFish.value,'time');
     });      
     tf_latEndHFish.addEventListener(eventListener, function() {
         tf_latEndHFish.value = entryMask(tf_latEndHFish.value,'lat');
     });
     tf_longEndHFish.addEventListener(eventListener, function() {
         tf_longEndHFish.value = entryMask(tf_longEndHFish.value,'lon');
     });
     tf_latSeineHFish.addEventListener(eventListener, function() {
         tf_latSeineHFish.value = entryMask(tf_latSeineHFish.value,'lat');
     });
     tf_longSeineHFish.addEventListener(eventListener, function() {
         tf_longSeineHFish.value = entryMask(tf_longSeineHFish.value,'lon');
     });
     tf_latGillHFish.addEventListener(eventListener, function() {
         tf_latGillHFish.value = entryMask(tf_latGillHFish.value,'lat');
     });
     tf_longGillHFish.addEventListener(eventListener, function() {
         tf_longGillHFish.value = entryMask(tf_longGillHFish.value,'lon');
     });
     tf_gillStartHFish.addEventListener(eventListener, function() {
         tf_gillStartHFish.value = entryMask(tf_gillStartHFish.value,'time');
     });
     tf_gillEndHFish.addEventListener(eventListener, function() {
         tf_gillEndHFish.value = entryMask(tf_gillEndHFish.value,'time');
     });

    
	var hdr_htis = setHeader('Human Health Fish Tissue Sample (HTIS)',currentTop,f.colIndent,f.colWidth1);
    scrollView.add(hdr_htis);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var statenotcollHTIS = false;
    var btn_radioNotCollectedHTIS = new setRadioButton((elementTop),(f.colIndent),statenotcollHTIS);
    var lbl_notCollectedHTIS = setLabel ('Not Collected', currentTop, (f.colIndent + f.buttonWidth), f.colWidth2);
   
    btn_radioNotCollectedHTIS.addEventListener('click',function() {
        switchRadioButton(btn_radioNotCollectedHTIS);
        if (btn_radioNotCollectedHTIS.state) {
            tf_sampleIDHTIS.value = '';
        }else{
            if (formSampleDict['CHEM_SAMPLE_ID'] != '') {
                tf_sampleIDHTIS.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 14);                
            }
        }
    });
    
    scrollView.add (lbl_notCollectedHTIS);
    scrollView.add (btn_radioNotCollectedHTIS);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var lbl_htisSampID = setLabel ('Sample ID', currentTop, f.colIndent, f.colWidth4);
    var tf_sampleIDHTIS = setTextFieldNumber ('', elementTop, f.leftCol4_2, f.colWidth4, '[Auto-populated]');
   
    scrollView.add (lbl_htisSampID);
    scrollView.add (tf_sampleIDHTIS);
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
        
    var btn_htisFishSize = setRadioButton(elementTop, f.colIndent, false);
    btn_htisFishSize.addEventListener('click',function() {
        switchRadioButton(btn_htisFishSize);
    });
    var lbl_htisFishSize = setLabel ('Fish all within 75% of largest specimen', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_htisFishSize);
    scrollView.add (lbl_htisFishSize);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    var btn_htisFishSpecies = setRadioButton(elementTop, f.colIndent, false);
    btn_htisFishSpecies.addEventListener('click',function() {
        switchRadioButton(btn_htisFishSpecies);
    });
    var lbl_htisFishSpecies = setLabel ('Fish all the same species', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    scrollView.add (btn_htisFishSpecies);
    scrollView.add (lbl_htisFishSpecies);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    // var btn_htisFish300 = setRadioButton(elementTop, f.colIndent, false);
    // btn_htisFish300.addEventListener('click',function() {
        // switchRadioButton(btn_htisFish300);
    // });
    // var lbl_htisFish300 = setLabel ('Fish composite total mass is at least 300 grams', currentTop, f.colIndent+f.buttonWidth, f.colWidth1);
    // scrollView.add (btn_htisFish300);
    // scrollView.add (lbl_htisFish300);
//     
    // currentTop += f.otherSpace;
    // elementTop += f.otherSpace;
//     
    lbl_htisSciName = setLabel ('Scientific Name (genus species)', currentTop, f.colIndent, f.colWidth3);
    lbl_htisSciName.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_htisSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Select genus species');
    tf_htisSciName.editable = false;
    btn_htisSciName = setDropdownButton(elementTop,f.leftCol3_2 + f.colWidth2 + f.buttonWidth);
    

    htisGLFile = openJSON('ui/jsonFiles/fishList.json');
    htisGLData = htisGLFile.fishList;
    htisGLSelect = setSelectTableView(htisGLData);
 
    
    btn_htisSciName.addEventListener('click', function() {
        popupWin.add(htisGLSelect);
        popupWin.open();    
    });
    htisGLSelect.addEventListener('click',function(e){
        //reset dictionary
        tf_htisSciName.value = e.rowData.rowValue;
        popupWin.remove(htisGLSelect);
        popupWin.close();
    });

    
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_htisSciName);
    scrollView.add(tf_htisSciName);
    scrollView.add(btn_htisSciName);
    
    lbl_othhtisSciName = setLabel('Other Name (if not on list)', currentTop, f.colIndent, f.colWidth3);
    lbl_othhtisSciName.textAlign = Ti.UI.TEXT_ALIGNMENT_LEFT;
    tf_othhtisSciName = setTextFieldHint ('', currentTop, f.leftCol3_2, ((f.colWidth2+60) - f.buttonWidth), 'Enter genus species');
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
        
    scrollView.add (lbl_othhtisSciName);
    scrollView.add(tf_othhtisSciName);

    //move frozen button here (AND comments), out of the array, it will apply to all samples   
       
    lbl_htisFrozen = setLabel('Samples Frozen?',currentTop,f.colIndent,f.colWidth3);    
    btn_htisFrozen = setRadioButton(elementTop, f.leftCol3_2, false); 
    var lbl_htisComments = setLabel ('Comments', currentTop, f.leftCol3_3, f.colWidth3);
    
    scrollView.add (lbl_htisFrozen);
    scrollView.add (btn_htisFrozen);
    scrollView.add (lbl_htisComments);
    
     btn_htisFrozen.addEventListener('click',function() {
        switchRadioButton(btn_htisFrozen);
    });   
    currentTop += f.labelSpace;
    elementTop += f.labelSpace; 
     
    var tf_htisComments = setTextField('', currentTop, f.leftCol3_3, f.colWidth3);
    scrollView.add (tf_htisComments);
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;   
       
    //create the list of depths 
    var tempArray = {};
    tempArray [1] = [1,'',''];
    view.depthArray = tempArray;    
 
    var btn_leftLine = setLeftButton(currentTop,f.colIndent);
    var tf_lineNo = setTextField('1',elementTop,f.colIndent + 50,f.colWidth4 - 50);
    var btn_rightLine = setRightButton(currentTop,f.leftCol4_2);
    
    scrollView.add(btn_leftLine);
    scrollView.add(tf_lineNo);
    scrollView.add(btn_rightLine);
    
    btn_leftLine.addEventListener('click',function(e){
        if (tf_lineNo.value > 0) {
            changeNum = Number(tf_lineNo.value) - 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
        }
    });
    btn_rightLine.addEventListener('click',function(e){
            changeNum = Number(tf_lineNo.value) + 1;
            changeLine(Number(tf_lineNo.value),changeNum);
            tf_lineNo.value = String(changeNum);
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
//move comments up, out of the array      
    var lbl_htisLength = setLabel ('Total length (mm)', currentTop, f.colIndent, f.colWidth3);  
 
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    
    var tf_htisLength = setTextFieldNumber('', currentTop, f.colIndent, f.colWidth3,'xxx'); 
 

    scrollView.add (lbl_htisLength);
    scrollView.add (tf_htisLength);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;

    function changeLine(lineNo,changeNum){
        var tempArray = view.depthArray;
        if (!(changeNum in tempArray)){
            tempArray[changeNum] = [changeNum,'',''];
        }
        tempArray[lineNo][0] = tf_lineNo.value;
        tempArray[lineNo][1] = tf_htisLength.value;   
        tf_htisLength.value = tempArray[changeNum][1];
        view.depthArray = tempArray;
    };    

    btn_update.addEventListener('click', function() {
	    formFishHumanDict['ACTUAL_DATE'] = tf_actualDateHFish.value;
	    if (tf_collMethHFish.value === 'OTHER') {
	        formFishHumanDict['COLLECTION_METHOD'] = tf_othMethHFish.value;
	    } else {
	        formFishHumanDict['COLLECTION_METHOD'] = tf_collMethHFish.value;
	    }
	    formFishHumanDict['HELMSMAN'] = tf_helmHFish.value;
	    formFishHumanDict['LINE_OUT'] = tf_lineHFish.value;
	    formFishHumanDict['HEADING'] = tf_headingHFish.value;
	    formFishHumanDict['LAT_DD_TRAWL_START'] = tf_latStartHFish.value;
        formFishHumanDict['LON_DD_TRAWL_START'] = tf_longStartHFish.value;
        formFishHumanDict['TRAWL_START'] = tf_startTimeHFish.value;
        formFishHumanDict['TRAWL_START_COMMENT'] = tf_commentStartHFish.value;
        formFishHumanDict['LAT_DD_TRAWL_END'] = tf_latEndHFish.value;
        formFishHumanDict['LON_DD_TRAWL_END'] = tf_longEndHFish.value; 
        formFishHumanDict['TRAWL_END'] = tf_endTimeHFish.value;
        formFishHumanDict['TRAWL_END_COMMENT'] = tf_commentEndHFish.value;
        formFishHumanDict['LAT_DD_HOOK'] = tf_latSeineHFish.value;
        formFishHumanDict['LON_DD_HOOK'] = tf_longSeineHFish.value;
        formFishHumanDict['LAT_DD_GILL'] = tf_latGillHFish.value;
        formFishHumanDict['LON_DD_GILL'] = tf_longGillHFish.value;
        formFishHumanDict['TRAWL_LENGTH'] = tf_seineLengthHFish.value;
        formFishHumanDict['HOOK_COMMENT'] = tf_seineCommHFish.value;
        formFishHumanDict['GILL_LENGTH'] = tf_gillLengthHFish.value;
        formFishHumanDict['GILL_START'] = tf_gillStartHFish.value;
        formFishHumanDict['GILL_END'] = tf_gillEndHFish.value;
        formFishHumanDict['GILL_COMMENT'] = tf_gillCommHFish.value;
        formFishHumanDict['HTIS_COMMENT']= tf_htisComments.value; 

        var tempArray = view.depthArray;
        tempArray[Number(tf_lineNo.value)][0] = tf_lineNo.value;
        tempArray[Number(tf_lineNo.value)][1] = tf_htisLength.value;
         
        //now prepare dictionary
        formFishHumanDict['HTIS_SAMPLE_ID'] = tf_sampleIDHTIS.value;
      
        if (btn_radioNotCollectedHTIS.state) {
            formFishHumanDict['HTIS_NOT_COLLECTED'] = 'Y';
        } else {
            formFishHumanDict['HTIS_NOT_COLLECTED'] = 'N';
        }
        if (btn_htisFishSize.state) {
            formFishHumanDict['HTIS_FISH_SIZE'] = 'Y';
        } else {
            formFishHumanDict['HTIS_FISH_SIZE'] = 'N';
        }
        if (btn_htisFishSpecies.state) {
            formFishHumanDict['HTIS_FISH_SPECIES'] = 'Y';
        } else {
            formFishHumanDict['HTIS_FISH_SPECIES'] = 'N';
        }
 /*
        if (btn_htisFish300.state) {
             formFishHumanDict['HTIS_FISH_300'] = 'Y';
         } else {
             formFishHumanDict['HTIS_FISH_300'] = 'N';
         }*/
 
        if (btn_htisFrozen.state) {
            formFishHumanDict['HTIS_FROZEN'] = 'Y';
        } else {
            formFishHumanDict['HTIS_FROZEN'] = 'N';
        }
        if (tf_htisSciName.value === 'OTHER') {
            formFishHumanDict['HTIS_NAME_SCI'] = tf_othhtisSciName.value;
        } else {
            formFishHumanDict['HTIS_NAME_SCI'] = tf_htisSciName.value;
        }
        
        view.depthArray = tempArray;
        var size = 0, key;
        for (key in view.depthArray) {
            if (view.depthArray.hasOwnProperty(key)) size++;
        }
        for (var i = 1; i < size+1; i++) {
            formFishHumanDict['LINE_' + String(i)] = view.depthArray[i][0];
            formFishHumanDict['TTL_LENGTH_' + String(i)] = view.depthArray[i][1];
        }


	    saveJSON(formFishHumanDict,view.uid + '_FISHHUMAN.json');      
        saveJSON(view.depthArray,view.uid + '_FISHHUMAN_lineInfo.json');
    });
    
    view.addEventListener("updateFormFishHuman",function(e){
	    //reset dictionary
	    formFishHumanDict = openFormFishHumanDict();
	    view.uid = e.siteid + '_' + e.visitno;               
         changeStateRadioButton(btn_radioNotCollectedHTIS,false);
        tf_sampleIDHTIS.value = '';
        changeStateRadioButton(btn_htisFishSize,false);
        changeStateRadioButton(btn_htisFishSpecies,false);
 //       changeStateRadioButton(btn_htisFish300,false);
        changeStateRadioButton(btn_htisFrozen,false);
        tf_htisSciName.value = '';
        tf_collMethHFish.value = '';

         
        retrieveJSON(formFishHumanDict,view.uid + '_FISHHUMAN.json');
        retrieveJSON(formSampleDict,view.uid + '_SAMPLECOLLECTION.json');    
        //populate values from json-populated dictionary
        tf_actualDateHFish.value = formFishHumanDict['ACTUAL_DATE'];
        if (formFishHumanDict['COLLECTION_METHOD'] === 'TRAWL' || formFishHumanDict['COLLECTION_METHOD'] === 'GILL_NET' || 
        formFishHumanDict['COLLECTION_METHOD'] === 'HOOK' || formFishHumanDict['COLLECTION_METHOD'] === 'DOCKSIDE' || 
        formFishHumanDict['COLLECTION_METHOD'] === 'SEINE') {
            tf_collMethHFish.value = formFishHumanDict['COLLECTION_METHOD'];
        } else if (formFishHumanDict['COLLECTION_METHOD'] !== '') {
            tf_collMethHFish.value = 'OTHER';
            tf_othMethHFish.value = formFishHumanDict['COLLECTION_METHOD'];
        } else {
            tf_collMethHFish.value = '';
            tf_othMethHFish.value = '';
        }
        tf_helmHFish.value = formFishHumanDict['HELMSMAN'];
        tf_lineHFish.value = formFishHumanDict['LINE_OUT'];
        tf_headingHFish.value = formFishHumanDict['HEADING'];
        tf_latStartHFish.value =formFishHumanDict['LAT_DD_TRAWL_START'];
        tf_longStartHFish.value = formFishHumanDict['LON_DD_TRAWL_START'];
        tf_startTimeHFish.value = formFishHumanDict['TRAWL_START'];
        tf_commentStartHFish.value = formFishHumanDict['TRAWL_START_COMMENT'];
        tf_latEndHFish.value = formFishHumanDict['LAT_DD_TRAWL_END'];
        tf_longEndHFish.value = formFishHumanDict['LON_DD_TRAWL_END'];
        tf_endTimeHFish.value = formFishHumanDict['TRAWL_END'];
        tf_commentEndHFish.value = formFishHumanDict['TRAWL_END_COMMENT'];
        tf_latSeineHFish.value =  formFishHumanDict['LAT_DD_HOOK'];
        tf_longSeineHFish.value = formFishHumanDict['LON_DD_HOOK'];
        tf_latGillHFish.value = formFishHumanDict['LAT_DD_GILL'];
        tf_longGillHFish.value = formFishHumanDict['LON_DD_GILL'];
        tf_seineLengthHFish.value = formFishHumanDict['TRAWL_LENGTH'];
        tf_seineCommHFish.value = formFishHumanDict['HOOK_COMMENT'];
        tf_gillLengthHFish.value = formFishHumanDict['GILL_LENGTH'];
        tf_gillStartHFish.value = formFishHumanDict['GILL_START']; 
        tf_gillEndHFish.value = formFishHumanDict['GILL_END'];
        tf_gillCommHFish.value = formFishHumanDict['GILL_COMMENT'];
        tf_htisComments.value = formFishHumanDict['HTIS_COMMENT'];
       
        if (formFishHumanDict['HTIS_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radioNotCollectedHTIS,true);
        } else {
            changeStateRadioButton (btn_radioNotCollectedHTIS,false);
            if (formSampleDict['CHEM_SAMPLE_ID'] !== '') {
                tf_sampleIDHTIS.value = (Number(formSampleDict['CHEM_SAMPLE_ID']) + 14);                
            }
        }       
               
        if (formFishHumanDict['HTIS_FISH_SIZE'] === 'Y') {
              changeStateRadioButton(btn_htisFishSize,true);
        }
        if (formFishHumanDict['HTIS_FISH_SPECIES'] === 'Y') {
              changeStateRadioButton(btn_htisFishSpecies,true);
        }
/*
        if (formFishHumanDict['HTIS_FISH_300'] === 'Y') {
              changeStateRadioButton(btn_htisFish300,true);
        }*/

        if (formFishHumanDict['HTIS_FROZEN'] === 'Y') {
              changeStateRadioButton(btn_htisFrozen,true);
        }
        htisGLFileReturn = openJSON('ui/jsonFiles/fishList.json');
        htisGLDataReturn = htisGLFileReturn.fishList;       

        if (htisGLDataReturn.indexOf  (formFishHumanDict['HTIS_NAME_SCI'])) {
            tf_htisSciName.value = formFishHumanDict['HTIS_NAME_SCI'];
            //alert ('In the list');
        } else if (formFishHumanDict['HTIS_NAME_SCI'] !== '') {
            //alert ('not in the list');
            tf_htisSciName.value = 'OTHER';
            tf_othhtisSciName.value = formFishHumanDict['HTIS_NAME_SCI'];
        } else {
            tf_htisSciName.value = '';
            tf_othhtisSciName.value = '';
        }

          
        //line data
        tf_lineNo.value = '1';
        tf_htisLength.value = '';
        view.depthArray = {};
        var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_FISHHUMAN_lineInfo.json');
        if (jsonFile.exists()) {
              var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_FISHHUMAN_lineInfo.json');
              var data = jsonFile.read().text;
              view.depthArray = JSON.parse(data);
              tf_htisLength.value = view.depthArray[1][1];             
        } else {
              var tempArray = {};
              tempArray[1] = ['1','','',''];           
              view.depthArray = tempArray;
        }
          
   });
       
    view.add(scrollView);
    return view;
}   

function setView_formAssess(){
    var f = formatValues();
    var formAssessDict = openFormAssessDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();

    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
    
    var hdr_assess = setHeader ('Site Assessment', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_assess);  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    //RESIDENTIAL   
    var title_residential = setTitle ('Residential',currentTop, f.colIndent, f.colWidth1); 
    var spacer1 = new setSpacer(currentTop);
    scrollView.add(title_residential);
    scrollView.add(spacer1);
    scrollView.add(spacer1);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_low = setLabel ('LOW', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_mod = setLabel ('MODERATE',currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_high = setLabel ('HIGH',currentTop, f.leftCol4_4, f.colWidth4);
    scrollView.add (lbl_low);
    scrollView.add (lbl_mod);
    scrollView.add (lbl_high);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var resArray = threeButton('Residences',currentTop);    
    scrollView.add(resArray[0]);
    scrollView.add(resArray[1]);
    scrollView.add(resArray[2]);
    scrollView.add(resArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lawnArray = threeButton('Maintained Lawns',currentTop);    
    scrollView.add(lawnArray[0]);
    scrollView.add(lawnArray[1]);
    scrollView.add(lawnArray[2]);
    scrollView.add(lawnArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var conArray = threeButton('Construction',currentTop);    
    scrollView.add(conArray[0]);
    scrollView.add(conArray[1]);
    scrollView.add(conArray[2]);
    scrollView.add(conArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var pipeArray = threeButton('Pipes, Drains',currentTop);    
    scrollView.add(pipeArray[0]);
    scrollView.add(pipeArray[1]);
    scrollView.add(pipeArray[2]);
    scrollView.add(pipeArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var dumpArray = threeButton('Dumping',currentTop);    
    scrollView.add(dumpArray[0]);
    scrollView.add(dumpArray[1]);
    scrollView.add(dumpArray[2]);
    scrollView.add(dumpArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var roadArray = threeButton('Roads',currentTop);    
    scrollView.add(roadArray[0]);
    scrollView.add(roadArray[1]);
    scrollView.add(roadArray[2]);
    scrollView.add(roadArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var bridgeArray = threeButton('Bridges/Causeway',currentTop);    
    scrollView.add(bridgeArray[0]);
    scrollView.add(bridgeArray[1]);
    scrollView.add(bridgeArray[2]);
    scrollView.add(bridgeArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var sewageArray = threeButton('Sewage Treatment',currentTop);    
    scrollView.add(sewageArray[0]);
    scrollView.add(sewageArray[1]);
    scrollView.add(sewageArray[2]);
    scrollView.add(sewageArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    //RECREATIONAL
    var title_recreational = setTitle ('Recreational',currentTop, f.colIndent, f.colWidth1); 
    var spacer2 = new setSpacer(currentTop);
    scrollView.add(title_recreational);
    scrollView.add(spacer2);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_low2 = setLabel ('LOW', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_mod2 = setLabel ('MODERATE',currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_high2 = setLabel ('HIGH',currentTop, f.leftCol4_4, f.colWidth4);
    scrollView.add (lbl_low2);
    scrollView.add (lbl_mod2);
    scrollView.add (lbl_high2);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var hikingArray = threeButton('Hiking Trails',currentTop);    
    scrollView.add(hikingArray[0]);
    scrollView.add(hikingArray[1]);
    scrollView.add(hikingArray[2]);
    scrollView.add(hikingArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var parksArray = threeButton('Parks, Campgrounds',currentTop);    
    scrollView.add(parksArray[0]);
    scrollView.add(parksArray[1]);
    scrollView.add(parksArray[2]);
    scrollView.add(parksArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var primArray = threeButton('Primitive Parks',currentTop);    
    scrollView.add(primArray[0]);
    scrollView.add(primArray[1]);
    scrollView.add(primArray[2]);
    scrollView.add(primArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var trashArray = threeButton('Trash/Litter',currentTop);    
    scrollView.add(trashArray[0]);
    scrollView.add(trashArray[1]);
    scrollView.add(trashArray[2]);
    scrollView.add(trashArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var filmArray = threeButton('Surface Films',currentTop);    
    scrollView.add(filmArray[0]);
    scrollView.add(filmArray[1]);
    scrollView.add(filmArray[2]);
    scrollView.add(filmArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var dunesArray = threeButton('Dunes',currentTop);    
    scrollView.add(dunesArray[0]);
    scrollView.add(dunesArray[1]);
    scrollView.add(dunesArray[2]);
    scrollView.add(dunesArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var beachArray = threeButton('Beach',currentTop);    
    scrollView.add(beachArray[0]);
    scrollView.add(beachArray[1]);
    scrollView.add(beachArray[2]);
    scrollView.add(beachArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var forestArray = threeButton('Forested',currentTop);    
    scrollView.add(forestArray[0]);
    scrollView.add(forestArray[1]);
    scrollView.add(forestArray[2]);
    scrollView.add(forestArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    //AGRICULTURAL
    var title_agricultural = setTitle ('Agricultural',currentTop, f.colIndent, f.colWidth1); 
    var spacer3 = new setSpacer(currentTop);
    scrollView.add(title_agricultural);
    scrollView.add(spacer3);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_low3 = setLabel ('LOW', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_mod3 = setLabel ('MODERATE',currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_high3 = setLabel ('HIGH',currentTop, f.leftCol4_4, f.colWidth4);
    scrollView.add (lbl_low3);
    scrollView.add (lbl_mod3);
    scrollView.add (lbl_high3);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var cropArray = threeButton('Cropland',currentTop);    
    scrollView.add(cropArray[0]);
    scrollView.add(cropArray[1]);
    scrollView.add(cropArray[2]);
    scrollView.add(cropArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var pastureArray = threeButton('Pasture',currentTop);    
    scrollView.add(pastureArray[0]);
    scrollView.add(pastureArray[1]);
    scrollView.add(pastureArray[2]);
    scrollView.add(pastureArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var livestockArray = threeButton('Livestock Use',currentTop);    
    scrollView.add(livestockArray[0]);
    scrollView.add(livestockArray[1]);
    scrollView.add(livestockArray[2]);
    scrollView.add(livestockArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var orchardArray = threeButton('Orchards',currentTop);    
    scrollView.add(orchardArray[0]);
    scrollView.add(orchardArray[1]);
    scrollView.add(orchardArray[2]);
    scrollView.add(orchardArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var poultryArray = threeButton('Poultry',currentTop);    
    scrollView.add(poultryArray[0]);
    scrollView.add(poultryArray[1]);
    scrollView.add(poultryArray[2]);
    scrollView.add(poultryArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var irrigationArray = threeButton('Irrigation Equipment',currentTop);    
    scrollView.add(irrigationArray[0]);
    scrollView.add(irrigationArray[1]);
    scrollView.add(irrigationArray[2]);
    scrollView.add(irrigationArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var withdrawalArray = threeButton('Water Withdrawal',currentTop);    
    scrollView.add(withdrawalArray[0]);
    scrollView.add(withdrawalArray[1]);
    scrollView.add(withdrawalArray[2]);
    scrollView.add(withdrawalArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    //INDUSTRIAL
    var title_industrial = setTitle ('Industrial',currentTop, f.colIndent, f.colWidth1); 
    var spacer4 = new setSpacer(currentTop);
    scrollView.add(title_industrial);
    scrollView.add(spacer4);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_low4 = setLabel ('LOW', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_mod4 = setLabel ('MODERATE',currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_high4 = setLabel ('HIGH',currentTop, f.leftCol4_4, f.colWidth4);
    scrollView.add (lbl_low4);
    scrollView.add (lbl_mod4);
    scrollView.add (lbl_high4);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var plantsArray = threeButton('Industrial Plants',currentTop);    
    scrollView.add(plantsArray[0]);
    scrollView.add(plantsArray[1]);
    scrollView.add(plantsArray[2]);
    scrollView.add(plantsArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var minesArray = threeButton('Mines/Quarries',currentTop);    
    scrollView.add(minesArray[0]);
    scrollView.add(minesArray[1]);
    scrollView.add(minesArray[2]);
    scrollView.add(minesArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var oilArray = threeButton('Oil/Gas/Wells',currentTop);    
    scrollView.add(oilArray[0]);
    scrollView.add(oilArray[1]);
    scrollView.add(oilArray[2]);
    scrollView.add(oilArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var powerArray = threeButton('Power Plants',currentTop);    
    scrollView.add(powerArray[0]);
    scrollView.add(powerArray[1]);
    scrollView.add(powerArray[2]);
    scrollView.add(powerArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var loggingArray = threeButton('Logging',currentTop);    
    scrollView.add(loggingArray[0]);
    scrollView.add(loggingArray[1]);
    scrollView.add(loggingArray[2]);
    scrollView.add(loggingArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var fireArray = threeButton('Evidence of Fire',currentTop);    
    scrollView.add(fireArray[0]);
    scrollView.add(fireArray[1]);
    scrollView.add(fireArray[2]);
    scrollView.add(fireArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var odorArray = threeButton('Odors',currentTop);    
    scrollView.add(odorArray[0]);
    scrollView.add(odorArray[1]);
    scrollView.add(odorArray[2]);
    scrollView.add(odorArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var commercialArray = threeButton('Commercial',currentTop);    
    scrollView.add(commercialArray[0]);
    scrollView.add(commercialArray[1]);
    scrollView.add(commercialArray[2]);
    scrollView.add(commercialArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
 
    //STREAM MANAGEMENT
    var title_management = setTitle ('Stream Management',currentTop, f.colIndent, f.colWidth1); 
    var spacer5 = new setSpacer(currentTop);
    scrollView.add(title_management);
    scrollView.add(spacer5);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_low5 = setLabel ('LOW', currentTop, f.leftCol4_2, f.colWidth4);
    var lbl_mod5 = setLabel ('MODERATE',currentTop, f.leftCol4_3, f.colWidth4);
    var lbl_high5 = setLabel ('HIGH',currentTop, f.leftCol4_4, f.colWidth4);
    scrollView.add (lbl_low5);
    scrollView.add (lbl_mod5);
    scrollView.add (lbl_high5);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
 
    var chemArray = threeButton('Chemical Treatment',currentTop);    
    scrollView.add(chemArray[0]);
    scrollView.add(chemArray[1]);
    scrollView.add(chemArray[2]);
    scrollView.add(chemArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var anglingArray = threeButton('Angling Pressure',currentTop);    
    scrollView.add(anglingArray[0]);
    scrollView.add(anglingArray[1]);
    scrollView.add(anglingArray[2]);
    scrollView.add(anglingArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var dredgeArray = threeButton('Dredging',currentTop);    
    scrollView.add(dredgeArray[0]);
    scrollView.add(dredgeArray[1]);
    scrollView.add(dredgeArray[2]);
    scrollView.add(dredgeArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var channelArray = threeButton('Channelization',currentTop);    
    scrollView.add(channelArray[0]);
    scrollView.add(channelArray[1]);
    scrollView.add(channelArray[2]);
    scrollView.add(channelArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var watLevelArray = threeButton('Water Level Fluctuations',currentTop);    
    scrollView.add(watLevelArray[0]);
    scrollView.add(watLevelArray[1]);
    scrollView.add(watLevelArray[2]);
    scrollView.add(watLevelArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var shoreArray = threeButton('Shoreline Hardening',currentTop);    
    scrollView.add(shoreArray[0]);
    scrollView.add(shoreArray[1]);
    scrollView.add(shoreArray[2]);
    scrollView.add(shoreArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var dredgeMArray = threeButton('Dredge Material',currentTop);    
    scrollView.add(dredgeMArray[0]);
    scrollView.add(dredgeMArray[1]);
    scrollView.add(dredgeMArray[2]);
    scrollView.add(dredgeMArray[3]);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 

    var hdr_siteChar = setHeader ('SITE CHARACTERISTICS (200m radius)',currentTop);
    scrollView.add (hdr_siteChar);
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var title_wBody = setTitle ('Waterbody Character',currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_wBody);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var lbl_pristine = setLabel ('Waterbody Pristine', currentTop, f.colIndent, f.colWidth3);
    var tf_pristine = setTextField(formAssessDict['PRISTINE'],currentTop, f.leftCol3_2,(f.colWidth3 - f.buttonWidth));
    var btn_pristine = new setDropdownButton((currentTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var lbl_appealing = setLabel ('Waterbody Appealing', currentTop, f.colIndent, f.colWidth3);
    var tf_appealing = setTextField('',currentTop, f.leftCol3_2,(f.colWidth3 - f.buttonWidth));
    var btn_appealing = new setDropdownButton((currentTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var title_dLand = setTitle ('Dominant Land Use',currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_dLand);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var lbl_dominantLand = setLabel ('Dominant Land Use Around X', currentTop, f.colIndent, f.colWidth3);
    var tf_dominantLand = setTextField('',currentTop, f.leftCol3_2,(f.colWidth3 - f.buttonWidth));
    var btn_dominantLand = new setDropdownButton((currentTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
   
    var lbl_dominantAge = setLabel ('If Forest, Dominant Age Class', currentTop, f.colIndent, f.colWidth3);
    var tf_dominantAge = setTextField('',currentTop, f.leftCol3_2,(f.colWidth3 - f.buttonWidth));
    var btn_dominantAge = new setDropdownButton((currentTop),(f.leftCol3_2 + f.colWidth3 - f.buttonWidth));
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    //Include choices
    var pristineData = ['5','5 - Pristine','4','4','3','3','2','2','1','1 - Highly Disturbed'];
    var pristineSelect = setSelectTableView2(pristineData);
  
    var appealingData = ['5','5 - Appealing','4','4','3','3','2','2','1','1 - Unappealing'];
    var appealingSelect = setSelectTableView2(appealingData);
  
    var dominantLandData = ['FOREST','AGRICULTURE','RANGE','URBAN','SUBURBAN'];
    var dominantLandSelect = setSelectTableView(dominantLandData);
  
    var dominantAgeData = ['0-25','26-75','>75'];
    var dominantAgeSelect = setSelectTableView(dominantAgeData);
    scrollView.add (lbl_pristine);
    scrollView.add (tf_pristine);
    scrollView.add (btn_pristine);
    scrollView.add (lbl_appealing);
    scrollView.add (tf_appealing);
    scrollView.add (btn_appealing);
    scrollView.add (lbl_dominantLand);
    scrollView.add (tf_dominantLand);
    scrollView.add (btn_dominantLand);
    scrollView.add (lbl_dominantAge);
    scrollView.add (tf_dominantAge);
    scrollView.add (btn_dominantAge);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
  
    var title_weather = setTitle ('Additional Notes',currentTop, f.colIndent, f.colWidth1);
    scrollView.add (title_weather);
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
  
   //list groupings for site characteristics from the assesment form
  
   var lbl_weather = setLabel ('Weather', currentTop, f.colIndent, f.colWidth2);
   var ta_weather = setTextArea (formAssessDict['WEATHER'],currentTop, f.leftCol2_2,300,200);
  
   currentTop += f.otherSpace + 170;
   elementTop += f.otherSpace  + 170;
  
   var lbl_general = setLabel ('General Assessment', currentTop, f.colIndent, f.colWidth2);
   var ta_general = setTextArea (formAssessDict['GEN_COM'],currentTop, f.leftCol2_2,300,200);
  
   currentTop += f.otherSpace + 170;
   elementTop += f.otherSpace  + 170;
  
  
   scrollView.add (lbl_weather);    
   scrollView.add (ta_weather);
   scrollView.add (lbl_general);
   scrollView.add (ta_general);
  
   btn_pristine.addEventListener('click', function() {
         popupWin.add(pristineSelect);
         popupWin.open();
   });
   pristineSelect.addEventListener('click',function(e){
         tf_pristine.value = e.rowData.rowValue;
         popupWin.remove(pristineSelect);
         popupWin.close();
   });
   btn_appealing.addEventListener('click', function() {
         popupWin.add(appealingSelect);
         popupWin.open();
   });
   appealingSelect.addEventListener('click',function(e){
         tf_appealing.value = e.rowData.rowValue;
         popupWin.remove(appealingSelect);
         popupWin.close();
   });
   btn_dominantLand.addEventListener('click', function() {
         popupWin.add(dominantLandSelect);
         popupWin.open();
   });
   dominantLandSelect.addEventListener('click',function(e){
         tf_dominantLand.value = e.rowData.rowValue;
         popupWin.remove(dominantLandSelect);
         popupWin.close();
   });
  
   btn_dominantAge.addEventListener('click', function() {
         popupWin.add(dominantAgeSelect);
         popupWin.open();
   });
   dominantAgeSelect.addEventListener('click',function(e){
         tf_dominantAge.value = e.rowData.rowValue;
         popupWin.remove(dominantAgeSelect);
         popupWin.close();
   });
 
    btn_update.addEventListener('click', function() {
	    if (resArray[1].state === true) {formAssessDict['RES_RES'] = 'L';}
	    if (resArray[2].state === true) {formAssessDict['RES_RES'] = 'M';}
	    if (resArray[3].state === true) {formAssessDict['RES_RES'] = 'H';}
	    if (lawnArray[1].state === true) {formAssessDict['RES_LAWN'] = 'L';}
	    if (lawnArray[2].state === true) {formAssessDict['RES_LAWN'] = 'M';}
	    if (lawnArray[3].state === true) {formAssessDict['RES_LAWN'] = 'H';}
	    if (conArray[1].state === true) {formAssessDict['RES_CON'] = 'L';}
	    if (conArray[2].state === true) {formAssessDict['RES_CON'] = 'M';}
	    if (conArray[3].state === true) {formAssessDict['RES_CON'] = 'H';}
	    if (pipeArray[1].state === true) {formAssessDict['RES_PIPE'] = 'L';}
	    if (pipeArray[2].state === true) {formAssessDict['RES_PIPE'] = 'M';}
	    if (pipeArray[3].state === true) {formAssessDict['RES_PIPE'] = 'H';}
	    if (dumpArray[1].state === true) {formAssessDict['RES_DUMP'] = 'L';}
	    if (dumpArray[2].state === true) {formAssessDict['RES_DUMP'] = 'M';}
	    if (dumpArray[3].state === true) {formAssessDict['RES_DUMP'] = 'H';}
	    if (roadArray[1].state === true) {formAssessDict['RES_ROAD'] = 'L';}
	    if (roadArray[2].state === true) {formAssessDict['RES_ROAD'] = 'M';}
	    if (roadArray[3].state === true) {formAssessDict['RES_ROAD'] = 'H';}
	    if (bridgeArray[1].state === true) {formAssessDict['RES_BRID'] = 'L';}
	    if (bridgeArray[2].state === true) {formAssessDict['RES_BRID'] = 'M';}
	    if (bridgeArray[3].state === true) {formAssessDict['RES_BRID'] = 'H';}
	    if (sewageArray[1].state === true) {formAssessDict['RES_SEWG'] = 'L';}
	    if (sewageArray[2].state === true) {formAssessDict['RES_SEWG'] = 'M';}
	    if (sewageArray[3].state === true) {formAssessDict['RES_SEWG'] = 'H';}
	    if (hikingArray[1].state === true) {formAssessDict['REC_TRLS'] = 'L';}
	    if (hikingArray[2].state === true) {formAssessDict['REC_TRLS'] = 'M';}
	    if (hikingArray[3].state === true) {formAssessDict['REC_TRLS'] = 'H';}
	    if (parksArray[1].state === true) {formAssessDict['REC_PARK'] = 'L';}
	    if (parksArray[2].state === true) {formAssessDict['REC_PARK'] = 'M';}
	    if (parksArray[3].state === true) {formAssessDict['REC_PARK'] = 'H';}
	    if (primArray[1].state === true) {formAssessDict['REC_PRIM'] = 'L';}
	    if (primArray[2].state === true) {formAssessDict['REC_PRIM'] = 'M';}
	    if (primArray[3].state === true) {formAssessDict['REC_PRIM'] = 'H';}
	    if (trashArray[1].state === true) {formAssessDict['REC_TRAS'] = 'L';}
	    if (trashArray[2].state === true) {formAssessDict['REC_TRAS'] = 'M';}
	    if (trashArray[3].state === true) {formAssessDict['REC_TRAS'] = 'H';}
	    if (filmArray[1].state === true) {formAssessDict['REC_FILM'] = 'L';}
	    if (filmArray[2].state === true) {formAssessDict['REC_FILM'] = 'M';}
	    if (filmArray[3].state === true) {formAssessDict['REC_FILM'] = 'H';}
	    if (dunesArray[1].state === true) {formAssessDict['REC_DUNES'] = 'L';}
	    if (dunesArray[2].state === true) {formAssessDict['REC_DUNES'] = 'M';}
	    if (dunesArray[3].state === true) {formAssessDict['REC_DUNES'] = 'H';}
	    if (beachArray[1].state === true) {formAssessDict['REC_BEACH'] = 'L';}
	    if (beachArray[2].state === true) {formAssessDict['REC_BEACH'] = 'M';}
	    if (beachArray[3].state === true) {formAssessDict['REC_BEACH'] = 'H';}
	    if (forestArray[1].state === true) {formAssessDict['REC_FOREST'] = 'L';}
	    if (forestArray[2].state === true) {formAssessDict['REC_FOREST'] = 'M';}
	    if (forestArray[3].state === true) {formAssessDict['REC_FOREST'] = 'H';}
	    if (cropArray[1].state === true) {formAssessDict['AGR_CROP'] = 'L';}
	    if (cropArray[2].state === true) {formAssessDict['AGR_CROP'] = 'M';}
	    if (cropArray[3].state === true) {formAssessDict['AGR_CROP'] = 'H';} 
	    if (pastureArray[1].state === true) {formAssessDict['AGR_PAS'] = 'L';}
	    if (pastureArray[2].state === true) {formAssessDict['AGR_PAS'] = 'M';}
	    if (pastureArray[3].state === true) {formAssessDict['AGR_PAS'] = 'H';} 
	    if (orchardArray[1].state === true) {formAssessDict['AGR_ORCH'] = 'L';}
	    if (orchardArray[2].state === true) {formAssessDict['AGR_ORCH'] = 'M';}
	    if (orchardArray[3].state === true) {formAssessDict['AGR_ORCH'] = 'H';} 
	    if (livestockArray[1].state === true) {formAssessDict['AGR_STCK'] = 'L';}
	    if (livestockArray[2].state === true) {formAssessDict['AGR_STCK'] = 'M';}
	    if (livestockArray[3].state === true) {formAssessDict['AGR_STCK'] = 'H';} 
	    if (poultryArray[1].state === true) {formAssessDict['AGR_POUL'] = 'L';}
	    if (poultryArray[2].state === true) {formAssessDict['AGR_POUL'] = 'M';}
	    if (poultryArray[3].state === true) {formAssessDict['AGR_POUL'] = 'H';} 
	    if (irrigationArray[1].state === true) {formAssessDict['AGR_IRRG'] = 'L';}
	    if (irrigationArray[2].state === true) {formAssessDict['AGR_IRRG'] = 'M';}
	    if (irrigationArray[3].state === true) {formAssessDict['AGR_IRRG'] = 'H';} 
	    if (withdrawalArray[1].state === true) {formAssessDict['AGR_WITH'] = 'L';}
	    if (withdrawalArray[2].state === true) {formAssessDict['AGR_WITH'] = 'M';}
	    if (withdrawalArray[3].state === true) {formAssessDict['AGR_WITH'] = 'H';} 
	    if (plantsArray[1].state === true) {formAssessDict['IND_IND'] = 'L';}
	    if (plantsArray[2].state === true) {formAssessDict['IND_IND'] = 'M';}
	    if (plantsArray[3].state === true) {formAssessDict['IND_IND'] = 'H';}   
	    if (minesArray[1].state === true) {formAssessDict['IND_MINE'] = 'L';}
	    if (minesArray[2].state === true) {formAssessDict['IND_MINE'] = 'M';}
	    if (minesArray[3].state === true) {formAssessDict['IND_MINE'] = 'H';}   
	    if (oilArray[1].state === true) {formAssessDict['IND_OIL'] = 'L';}
	    if (oilArray[2].state === true) {formAssessDict['IND_OIL'] = 'M';}
	    if (oilArray[3].state === true) {formAssessDict['IND_OIL'] = 'H';}   
	    if (powerArray[1].state === true) {formAssessDict['IND_POWR'] = 'L';}
	    if (powerArray[2].state === true) {formAssessDict['IND_POWR'] = 'M';}
	    if (powerArray[3].state === true) {formAssessDict['IND_POWR'] = 'H';}   
	    if (loggingArray[1].state === true) {formAssessDict['IND_LOG'] = 'L';}
	    if (loggingArray[2].state === true) {formAssessDict['IND_LOG'] = 'M';}
	    if (loggingArray[3].state === true) {formAssessDict['IND_LOG'] = 'H';}   
	    if (fireArray[1].state === true) {formAssessDict['IND_FIRE'] = 'L';}
	    if (fireArray[2].state === true) {formAssessDict['IND_FIRE'] = 'M';}
	    if (fireArray[3].state === true) {formAssessDict['IND_FIRE'] = 'H';}   
	    if (odorArray[1].state === true) {formAssessDict['IND_ODOR'] = 'L';}
	    if (odorArray[2].state === true) {formAssessDict['IND_ODOR'] = 'M';}
	    if (odorArray[3].state === true) {formAssessDict['IND_ODOR'] = 'H';}   
	    if (commercialArray[1].state === true) {formAssessDict['IND_COML'] = 'L';}
	    if (commercialArray[2].state === true) {formAssessDict['IND_COML'] = 'M';}
	    if (commercialArray[3].state === true) {formAssessDict['IND_COML'] = 'H';}
	    if (chemArray[1].state === true) {formAssessDict['MAN_CHEM'] = 'L';}
	    if (chemArray[2].state === true) {formAssessDict['MAN_CHEM'] = 'M';}
	    if (chemArray[3].state === true) {formAssessDict['MAN_CHEM'] = 'H';}
	    if (anglingArray[1].state === true) {formAssessDict['MAN_ANGL'] = 'L';}
	    if (anglingArray[2].state === true) {formAssessDict['MAN_ANGL'] = 'M';}
	    if (anglingArray[3].state === true) {formAssessDict['MAN_ANGL'] = 'H';}
	    if (dredgeArray[1].state === true) {formAssessDict['MAN_DRED'] = 'L';}
	    if (dredgeArray[2].state === true) {formAssessDict['MAN_DRED'] = 'M';}
	    if (dredgeArray[3].state === true) {formAssessDict['MAN_DRED'] = 'H';}
	    if (channelArray[1].state === true) {formAssessDict['MAN_CHAN'] = 'L';}
	    if (channelArray[2].state === true) {formAssessDict['MAN_CHAN'] = 'M';}
	    if (channelArray[3].state === true) {formAssessDict['MAN_CHAN'] = 'H';}
	    if (watLevelArray[1].state === true) {formAssessDict['MAN_WLF'] = 'L';}
	    if (watLevelArray[2].state === true) {formAssessDict['MAN_WLF'] = 'M';}
	    if (watLevelArray[3].state === true) {formAssessDict['MAN_WLF'] = 'H';}
	    if (shoreArray[1].state === true) {formAssessDict['MAN_SHORE'] = 'L';}
	    if (shoreArray[2].state === true) {formAssessDict['MAN_SHORE'] = 'M';}
	    if (shoreArray[3].state === true) {formAssessDict['MAN_SHORE'] = 'H';}
	    if (dredgeMArray[1].state === true) {formAssessDict['MAN_DREDGE'] = 'L';}
	    if (dredgeMArray[2].state === true) {formAssessDict['MAN_DREDGE'] = 'M';}
	    if (dredgeMArray[3].state === true) {formAssessDict['MAN_DREDGE'] = 'H';}
	    formAssessDict['APPEALING'] = tf_appealing.value;
	    formAssessDict['PRISTINE'] = tf_pristine.value;
	    formAssessDict['DOMLANDUSE'] = tf_dominantLand.value;
	    formAssessDict['FORAGECL'] = tf_dominantAge.value;
	    formAssessDict['WEATHER'] = ta_weather.value;
	    formAssessDict['GEN_COM'] = ta_general.value;
	    
	    saveJSON(formAssessDict,view.uid + '_ASSESSMENT.json');      
    });
    
    view.addEventListener("updateFormAssess",function(e){
	    //reset dictionary
	    formAssessDict = openFormAssessDict();
	    view.uid = e.siteid + '_' + e.visitno;           
	    retrieveJSON(formAssessDict,view.uid + '_ASSESSMENT.json');        
	    //populate values from json-populated dictionary
	   
	    if (formAssessDict['RES_RES']=== 'L') {
	        changeStateRadioButton(resArray[1],true);
	    } else {
	        changeStateRadioButton(resArray[1],false);
	    }
	    if (formAssessDict['RES_RES'] === 'M') {
	        changeStateRadioButton(resArray[2],true);
	    } else {
	        changeStateRadioButton(resArray[2],false);
	    }
	    if (formAssessDict['RES_RES'] === 'H') {
	        changeStateRadioButton(resArray[3],true);
	    } else {
	        changeStateRadioButton(resArray[3],false);
	    }
	    if (formAssessDict['RES_LAWN'] === 'L') {
	        changeStateRadioButton(lawnArray[1],true);
	    } else {
	        changeStateRadioButton(lawnArray[1],false);
	    }
	    if (formAssessDict['RES_LAWN'] === 'M') {
	        changeStateRadioButton(lawnArray[2],true);
	    } else {
	        changeStateRadioButton(lawnArray[2],false);
	    }
	    if (formAssessDict['RES_LAWN'] === 'H') {
	        changeStateRadioButton(lawnArray[3],true);
	    } else {
	        changeStateRadioButton(lawnArray[3],false);
	    }
	    if (formAssessDict['RES_CON'] === 'L') {
	        changeStateRadioButton(conArray[1],true);
	    } else {
	        changeStateRadioButton(conArray[1],false);
	    }
	    if (formAssessDict['RES_CON'] === 'M') {
	        changeStateRadioButton(conArray[2],true);
	    } else {
	        changeStateRadioButton(conArray[2],false);
	    }
	    if (formAssessDict['RES_CON'] === 'H') {
	        changeStateRadioButton(conArray[3],true);
	    } else {
	        changeStateRadioButton(conArray[3],false);
	    }
	    if (formAssessDict['RES_PIPE'] === 'L') {
	        changeStateRadioButton(pipeArray[1],true);
	    } else {
	        changeStateRadioButton(pipeArray[1],false);
	    }
	    if (formAssessDict['RES_PIPE'] === 'M') {
	        changeStateRadioButton(pipeArray[2],true);
	    } else {
	        changeStateRadioButton(pipeArray[2],false);
	    }
	    if (formAssessDict['RES_PIPE'] === 'H') {
	        changeStateRadioButton(pipeArray[3],true);
	    } else {
	        changeStateRadioButton(pipeArray[3],false);
	    }
	    if (formAssessDict['RES_DUMP'] === 'L') {
	        changeStateRadioButton(dumpArray[1],true);
	    } else {
	        changeStateRadioButton(dumpArray[1],false);
	    }
	    if (formAssessDict['RES_DUMP'] === 'M') {
	        changeStateRadioButton(dumpArray[2],true);
	    } else {
	        changeStateRadioButton(dumpArray[2],false);
	    }
	    if (formAssessDict['RES_DUMP'] === 'H') {
	        changeStateRadioButton(dumpArray[3],true);
	    } else {
	        changeStateRadioButton(dumpArray[3],false);
	    }
	    if (formAssessDict['RES_ROAD'] === 'L') {
	        changeStateRadioButton(roadArray[1],true);
	    } else {
	        changeStateRadioButton(roadArray[1],false);
	    }
	    if (formAssessDict['RES_ROAD'] === 'M') {
	        changeStateRadioButton(roadArray[2],true);
	    } else {
	        changeStateRadioButton(roadArray[2],false);
	    }
	    if (formAssessDict['RES_ROAD'] === 'H') {
	        changeStateRadioButton(roadArray[3],true);
	    } else {
	        changeStateRadioButton(roadArray[3],false);
	    }
	    if (formAssessDict['RES_BRID'] === 'L') {
	        changeStateRadioButton(bridgeArray[1],true);
	    } else {
	        changeStateRadioButton(bridgeArray[1],false);
	    }
	    if (formAssessDict['RES_BRID'] === 'M') {
	        changeStateRadioButton(bridgeArray[2],true);
	    } else {
	        changeStateRadioButton(bridgeArray[2],false);
	    }
	    if (formAssessDict['RES_BRID'] === 'H') {
	        changeStateRadioButton(bridgeArray[3],true);
	    } else {
	        changeStateRadioButton(bridgeArray[3],false);
	    }
	    if (formAssessDict['RES_SEWG'] === 'L') {
	        changeStateRadioButton(sewageArray[1],true);
	    } else {
	        changeStateRadioButton(sewageArray[1],false);
	    }
	    if (formAssessDict['RES_SEWG'] === 'M') {
	        changeStateRadioButton(sewageArray[2],true);
	    } else {
	        changeStateRadioButton(sewageArray[2],false);
	    }
	    if (formAssessDict['RES_SEWG'] === 'H') {
	        changeStateRadioButton(sewageArray[3],true);
	    } else {
	        changeStateRadioButton(sewageArray[3],false);
	    }
	    if (formAssessDict['REC_TRLS'] === 'L') {
	        changeStateRadioButton(hikingArray[1],true);
	    } else {
	        changeStateRadioButton(hikingArray[1],false);
	    }
	    if (formAssessDict['REC_TRLS'] === 'M') {
	        changeStateRadioButton(hikingArray[2],true);
	    } else {
	        changeStateRadioButton(hikingArray[2],false);
	    }
	    if (formAssessDict['REC_TRLS'] === 'H') {
	        changeStateRadioButton(hikingArray[3],true);
	    } else {
	        changeStateRadioButton(hikingArray[3],false);
	    }
	    if (formAssessDict['REC_PARK'] === 'L') {
	        changeStateRadioButton(parksArray[1],true);
	    } else {
	        changeStateRadioButton(parksArray[1],false);
	    }
	    if (formAssessDict['REC_PARK'] === 'M') {
	        changeStateRadioButton(parksArray[2],true);
	    } else {
	        changeStateRadioButton(parksArray[2],false);
	    }
	    if (formAssessDict['REC_PARK'] === 'H') {
	        changeStateRadioButton(parksArray[3],true);
	    } else {
	        changeStateRadioButton(parksArray[3],false);
	    }
	    if (formAssessDict['REC_PRIM'] === 'L') {
	        changeStateRadioButton(primArray[1],true);
	    } else {
	        changeStateRadioButton(primArray[1],false);
	    }
	    if (formAssessDict['REC_PRIM'] === 'M') {
	        changeStateRadioButton(primArray[2],true);
	    } else {
	        changeStateRadioButton(primArray[2],false);
	    }
	    if (formAssessDict['REC_PRIM'] === 'H') {
	        changeStateRadioButton(primArray[3],true);
	    } else {
	        changeStateRadioButton(primArray[3],false);
	    }
	    if (formAssessDict['REC_TRAS'] === 'L') {
	        changeStateRadioButton(trashArray[1],true);
	    } else {
	        changeStateRadioButton(trashArray[1],false);
	    }
	    if (formAssessDict['REC_TRAS'] === 'M') {
	        changeStateRadioButton(trashArray[2],true);
	    } else {
	        changeStateRadioButton(trashArray[2],false);
	    }
	    if (formAssessDict['REC_TRAS'] === 'H') {
	        changeStateRadioButton(trashArray[3],true);
	    } else {
	        changeStateRadioButton(trashArray[3],false);
	    }
	    if (formAssessDict['REC_FILM'] === 'L') {
	        changeStateRadioButton(filmArray[1],true);
	    } else {
	        changeStateRadioButton(filmArray[1],false);
	    }
	    if (formAssessDict['REC_FILM'] === 'M') {
	        changeStateRadioButton(filmArray[2],true);
	    } else {
	        changeStateRadioButton(filmArray[2],false);
	    }
	    if (formAssessDict['REC_FILM'] === 'H') {
	        changeStateRadioButton(filmArray[3],true);
	    } else {
	        changeStateRadioButton(filmArray[3],false);
	    }
	    if (formAssessDict['REC_DUNES'] === 'L') {
	        changeStateRadioButton(dunesArray[1],true);
	    } else {
	        changeStateRadioButton(dunesArray[1],false);
	    }
	    if (formAssessDict['REC_DUNES'] === 'M') {
	        changeStateRadioButton(dunesArray[2],true);
	    } else {
	        changeStateRadioButton(dunesArray[2],false);
	    }
	    if (formAssessDict['REC_DUNES'] === 'H') {
	        changeStateRadioButton(dunesArray[3],true);
	    } else {
	        changeStateRadioButton(dunesArray[3],false);
	    }
	    if (formAssessDict['REC_BEACH'] === 'L') {
	        changeStateRadioButton(beachArray[1],true);
	    } else {
	        changeStateRadioButton(beachArray[1],false);
	    }
	    if (formAssessDict['REC_BEACH'] === 'M') {
	        changeStateRadioButton(beachArray[2],true);
	    } else {
	        changeStateRadioButton(beachArray[2],false);
	    }
	    if (formAssessDict['REC_BEACH'] === 'H') {
	        changeStateRadioButton(beachArray[3],true);
	    } else {
	        changeStateRadioButton(beachArray[3],false);
	    }
	    if (formAssessDict['REC_FOREST'] === 'L') {
	        changeStateRadioButton(forestArray[1],true);
	    } else {
	        changeStateRadioButton(forestArray[1],false);
	    }
	    if (formAssessDict['REC_FOREST'] === 'M') {
	        changeStateRadioButton(forestArray[2],true);
	    } else {
	        changeStateRadioButton(forestArray[2],false);
	    }
	    if (formAssessDict['REC_FOREST'] === 'H') {
	        changeStateRadioButton(forestArray[3],true);
	    } else {
	        changeStateRadioButton(forestArray[3],false);
	    }
	    if (formAssessDict['AGR_CROP'] === 'L') {
	        changeStateRadioButton(cropArray[1],true);
	    } else {
	        changeStateRadioButton(cropArray[1],false);
	    }
	    if (formAssessDict['AGR_CROP'] === 'M') {
	        changeStateRadioButton(cropArray[2],true);
	    } else {
	        changeStateRadioButton(cropArray[2],false);
	    }
	    if (formAssessDict['AGR_CROP'] === 'H') {
	        changeStateRadioButton(cropArray[3],true);
	    } else {
	        changeStateRadioButton(cropArray[3],false);
	    }
	     if (formAssessDict['AGR_PAS'] === 'L') {
	        changeStateRadioButton(pastureArray[1],true);
	    } else {
	        changeStateRadioButton(pastureArray[1],false);
	    }
	    if (formAssessDict['AGR_PAS'] === 'M') {
	        changeStateRadioButton(pastureArray[2],true);
	    } else {
	        changeStateRadioButton(pastureArray[2],false);
	    }
	    if (formAssessDict['AGR_PAS'] === 'H') {
	        changeStateRadioButton(pastureArray[3],true);
	    } else {
	        changeStateRadioButton(pastureArray[3],false);
	    }
	     if (formAssessDict['AGR_ORCH'] === 'L') {
	        changeStateRadioButton(orchardArray[1],true);
	    } else {
	        changeStateRadioButton(orchardArray[1],false);
	    }
	    if (formAssessDict['AGR_ORCH'] === 'M') {
	        changeStateRadioButton(orchardArray[2],true);
	    } else {
	        changeStateRadioButton(orchardArray[2],false);
	    }
	    if (formAssessDict['AGR_ORCH'] === 'H') {
	        changeStateRadioButton(orchardArray[3],true);
	    } else {
	        changeStateRadioButton(orchardArray[3],false);
	    }
	    if (formAssessDict['AGR_STCK'] === 'L') {
	        changeStateRadioButton(livestockArray[1],true);
	    } else {
	        changeStateRadioButton(livestockArray[1],false);
	    }
	    if (formAssessDict['AGR_STCK'] === 'M') {
	        changeStateRadioButton(livestockArray[2],true);
	    } else {
	        changeStateRadioButton(livestockArray[2],false);
	    }
	    if (formAssessDict['AGR_STCK'] === 'H') {
	        changeStateRadioButton(livestockArray[3],true);
	    } else {
	        changeStateRadioButton(livestockArray[3],false);
	    }
	    if (formAssessDict['AGR_POUL'] === 'L') {
	        changeStateRadioButton(poultryArray[1],true);
	    } else {
	        changeStateRadioButton(poultryArray[1],false);
	    }
	    if (formAssessDict['AGR_POUL'] === 'M') {
	        changeStateRadioButton(poultryArray[2],true);
	    } else {
	        changeStateRadioButton(poultryArray[2],false);
	    }
	    if (formAssessDict['AGR_POUL'] === 'H') {
	        changeStateRadioButton(poultryArray[3],true);
	    } else {
	        changeStateRadioButton(poultryArray[3],false);
	    }
	    if (formAssessDict['AGR_IRRG'] === 'L') {
	        changeStateRadioButton(irrigationArray[1],true);
	    } else {
	        changeStateRadioButton(irrigationArray[1],false);
	    }
	    if (formAssessDict['AGR_IRRG'] === 'M') {
	        changeStateRadioButton(irrigationArray[2],true);
	    } else {
	        changeStateRadioButton(irrigationArray[2],false);
	    }
	    if (formAssessDict['AGR_IRRG'] === 'H') {
	        changeStateRadioButton(irrigationArray[3],true);
	    } else {
	        changeStateRadioButton(irrigationArray[3],false);
	    }  
	    if (formAssessDict['AGR_WITH'] === 'L') {
	        changeStateRadioButton(withdrawalArray[1],true);
	    } else {
	        changeStateRadioButton(withdrawalArray[1],false);
	    }
	    if (formAssessDict['AGR_WITH'] === 'M') {
	        changeStateRadioButton(withdrawalArray[2],true);
	    } else {
	        changeStateRadioButton(withdrawalArray[2],false);
	    }
	    if (formAssessDict['AGR_WITH'] === 'H') {
	        changeStateRadioButton(withdrawalArray[3],true);
	    } else {
	        changeStateRadioButton(withdrawalArray[3],false);
	    }  
	    if (formAssessDict['IND_IND'] === 'L') {
	        changeStateRadioButton(plantsArray[1],true);
	    } else {
	        changeStateRadioButton(plantsArray[1],false);
	    }
	    if (formAssessDict['IND_IND'] === 'M') {
	        changeStateRadioButton(plantsArray[2],true);
	    } else {
	        changeStateRadioButton(plantsArray[2],false);
	    }
	    if (formAssessDict['IND_IND'] === 'H') {
	        changeStateRadioButton(plantsArray[3],true);
	    } else {
	        changeStateRadioButton(plantsArray[3],false);
	    }  
	    if (formAssessDict['IND_MINE'] === 'L') {
	        changeStateRadioButton(minesArray[1],true);
	    } else {
	        changeStateRadioButton(minesArray[1],false);
	    }
	    if (formAssessDict['IND_MINE'] === 'M') {
	        changeStateRadioButton(minesArray[2],true);
	    } else {
	        changeStateRadioButton(minesArray[2],false);
	    }
	    if (formAssessDict['IND_MINE'] === 'H') {
	        changeStateRadioButton(minesArray[3],true);
	    } else {
	        changeStateRadioButton(minesArray[3],false);
	    } 
	    if (formAssessDict['IND_OIL'] === 'L') {
	        changeStateRadioButton(oilArray[1],true);
	    } else {
	        changeStateRadioButton(oilArray[1],false);
	    }
	    if (formAssessDict['IND_OIL'] === 'M') {
	        changeStateRadioButton(oilArray[2],true);
	    } else {
	        changeStateRadioButton(oilArray[2],false);
	    }
	    if (formAssessDict['IND_OIL'] === 'H') {
	        changeStateRadioButton(oilArray[3],true);
	    } else {
	        changeStateRadioButton(oilArray[3],false);
	    }   
	    if (formAssessDict['IND_POWR'] === 'L') {
	        changeStateRadioButton(powerArray[1],true);
	    } else {
	        changeStateRadioButton(powerArray[1],false);
	    }
	    if (formAssessDict['IND_POWR'] === 'M') {
	        changeStateRadioButton(powerArray[2],true);
	    } else {
	        changeStateRadioButton(powerArray[2],false);
	    }
	    if (formAssessDict['IND_POWR'] === 'H') {
	        changeStateRadioButton(powerArray[3],true);
	    } else {
	        changeStateRadioButton(powerArray[3],false);
	    }   
	    if (formAssessDict['IND_LOG'] === 'L') {
	        changeStateRadioButton(loggingArray[1],true);
	    } else {
	        changeStateRadioButton(loggingArray[1],false);
	    }
	    if (formAssessDict['IND_LOG'] === 'M') {
	        changeStateRadioButton(loggingArray[2],true);
	    } else {
	        changeStateRadioButton(loggingArray[2],false);
	    }
	    if (formAssessDict['IND_LOG'] === 'H') {
	        changeStateRadioButton(loggingArray[3],true);
	    } else {
	        changeStateRadioButton(loggingArray[3],false);
	    }
	    if (formAssessDict['IND_FIRE'] === 'L') {
	        changeStateRadioButton(fireArray[1],true);
	    } else {
	        changeStateRadioButton(fireArray[1],false);
	    }
	    if (formAssessDict['IND_FIRE'] === 'M') {
	        changeStateRadioButton(fireArray[2],true);
	    } else {
	        changeStateRadioButton(fireArray[2],false);
	    }
	    if (formAssessDict['IND_FIRE'] === 'H') {
	        changeStateRadioButton(fireArray[3],true);
	    } else {
	        changeStateRadioButton(fireArray[3],false);
	    }
	    if (formAssessDict['IND_ODOR'] === 'L') {
	        changeStateRadioButton(odorArray[1],true);
	    } else {
	        changeStateRadioButton(odorArray[1],false);
	    }
	    if (formAssessDict['IND_ODOR'] === 'M') {
	        changeStateRadioButton(odorArray[2],true);
	    } else {
	        changeStateRadioButton(odorArray[2],false);
	    }
	    if (formAssessDict['IND_ODOR'] === 'H') {
	        changeStateRadioButton(odorArray[3],true);
	    } else {
	        changeStateRadioButton(odorArray[3],false);
	    }
	    if (formAssessDict['IND_COML'] === 'L') {
	        changeStateRadioButton(commercialArray[1],true);
	    } else {
	        changeStateRadioButton(commercialArray[1],false);
	    }
	    if (formAssessDict['IND_COML'] === 'M') {
	        changeStateRadioButton(commercialArray[2],true);
	    } else {
	        changeStateRadioButton(commercialArray[2],false);
	    }
	    if (formAssessDict['IND_COML'] === 'H') {
	        changeStateRadioButton(commercialArray[3],true);
	    } else {
	        changeStateRadioButton(commercialArray[3],false);
	    }
	    if (formAssessDict['MAN_CHEM'] === 'L') {
	        changeStateRadioButton(chemArray[1],true);
	    } else {
	        changeStateRadioButton(chemArray[1],false);
	    }
	    if (formAssessDict['MAN_CHEM'] === 'M') {
	        changeStateRadioButton(chemArray[2],true);
	    } else {
	        changeStateRadioButton(chemArray[2],false);
	    }
	    if (formAssessDict['MAN_CHEM'] === 'H') {
	        changeStateRadioButton(chemArray[3],true);
	    } else {
	        changeStateRadioButton(chemArray[3],false);
	    }
	    if (formAssessDict['MAN_ANGL'] === 'L') {
	        changeStateRadioButton(anglingArray[1],true);
	    } else {
	        changeStateRadioButton(anglingArray[1],false);
	    }
	    if (formAssessDict['MAN_ANGL'] === 'M') {
	        changeStateRadioButton(anglingArray[2],true);
	    } else {
	        changeStateRadioButton(anglingArray[2],false);
	    }
	    if (formAssessDict['MAN_ANGL'] === 'H') {
	        changeStateRadioButton(anglingArray[3],true);
	    } else {
	        changeStateRadioButton(anglingArray[3],false);
	    }
	    if (formAssessDict['MAN_DRED'] === 'L') {
	        changeStateRadioButton(dredgeArray[1],true);
	    } else {
	        changeStateRadioButton(dredgeArray[1],false);
	    }
	    if (formAssessDict['MAN_DRED'] === 'M') {
	        changeStateRadioButton(dredgeArray[2],true);
	    } else {
	        changeStateRadioButton(dredgeArray[2],false);
	    }
	    if (formAssessDict['MAN_DRED'] === 'H') {
	        changeStateRadioButton(dredgeArray[3],true);
	    } else {
	        changeStateRadioButton(dredgeArray[3],false);
	    }
	    if (formAssessDict['MAN_CHAN'] === 'L') {
	        changeStateRadioButton(channelArray[1],true);
	    } else {
	        changeStateRadioButton(channelArray[1],false);
	    }
	    if (formAssessDict['MAN_CHAN'] === 'M') {
	        changeStateRadioButton(channelArray[2],true);
	    } else {
	        changeStateRadioButton(channelArray[2],false);
	    }
	    if (formAssessDict['MAN_CHAN'] === 'H') {
	        changeStateRadioButton(channelArray[3],true);
	    } else {
	        changeStateRadioButton(channelArray[3],false);
	    }
	    if (formAssessDict['MAN_WLF'] === 'L') {
	        changeStateRadioButton(watLevelArray[1],true);
	    } else {
	        changeStateRadioButton(watLevelArray[1],false);
	    }
	    if (formAssessDict['MAN_WLF'] === 'M') {
	        changeStateRadioButton(watLevelArray[2],true);
	    } else {
	        changeStateRadioButton(watLevelArray[2],false);
	    }
	    if (formAssessDict['MAN_WLF'] === 'H') {
	        changeStateRadioButton(watLevelArray[3],true);
	    } else {
	        changeStateRadioButton(watLevelArray[3],false);
	    }
	    if (formAssessDict['MAN_SHORE'] === 'L') {
	        changeStateRadioButton(shoreArray[1],true);
	    } else {
	        changeStateRadioButton(shoreArray[1],false);
	    }
	    if (formAssessDict['MAN_SHORE'] === 'M') {
	        changeStateRadioButton(shoreArray[2],true);
	    } else {
	        changeStateRadioButton(shoreArray[2],false);
	    }
	    if (formAssessDict['MAN_SHORE'] === 'H') {
	        changeStateRadioButton(shoreArray[3],true);
	    } else {
	        changeStateRadioButton(shoreArray[3],false);
	    }
	    if (formAssessDict['MAN_DREDGE'] === 'L') {
	        changeStateRadioButton(dredgeMArray[1],true);
	    } else {
	        changeStateRadioButton(dredgeMArray[1],false);
	    }
	    if (formAssessDict['MAN_DREDGE'] === 'M') {
	        changeStateRadioButton(dredgeMArray[2],true);
	    } else {
	        changeStateRadioButton(dredgeMArray[2],false);
	    }
	    if (formAssessDict['MAN_DREDGE'] === 'H') {
	        changeStateRadioButton(dredgeMArray[3],true);
	    } else {
	        changeStateRadioButton(dredgeMArray[3],false);
	    }
	   
	    tf_appealing.value = formAssessDict['APPEALING'];
	    tf_pristine.value = formAssessDict['PRISTINE'];
	    tf_dominantLand.value = formAssessDict['DOMLANDUSE'];
	    tf_dominantAge.value = formAssessDict['FORAGECL'];
	    ta_weather.value = formAssessDict['WEATHER'];
	    ta_general.value = formAssessDict['GEN_COM'];
	});
	
	view.add(scrollView);
	
	return view;
}


//mrc 12/16/14 - remove click events for NOT_COLLECTED buttons, these should not be clickable in tracking
// add sample types not in earlier version
function setView_formTracking(){
    var f = formatValues();
    var formTrackingDict = openFormTrackingDict();
    var view = setFormView();
    var scrollView = setScrollView();
    var popupWin = setPopupWindow();

    currentTop = 20;
    elementTop = 13;
       
    //Update view/button
    var updateView = setUpdateView();
    lbl_update = setUpdateLabel();
    var btn_update = new setupDateButton('Update DB',elementTop,f.leftCol2_2,f.colWidth3,60);
    updateView.add(lbl_update);
    updateView.add(btn_update);
    view.add(updateView);
    currentTop += f.otherSpace + 5;
    elementTop += f.otherSpace + 5; 
      
    var hdr_dataSub = setHeader ('Data Submission', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_dataSub); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var lbl_datasubmission = setLabel ('Data Submission Type', currentTop, f.colIndent, f.colWidth2);
    var tf_datasubmission = setTextField ('', elementTop, f.leftCol2_2, f.colWidth2-f.buttonWidth);
    tf_datasubmission.editable = false;
    var btn_datasubmission = new setDropdownButton((elementTop),(f.leftCol2_2 + f.colWidth2 - f.buttonWidth));

    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var lbl_dataNote = setLabel ('Describe blended submissions',elementTop, f.colIndent, f.colWidth2);
    var tf_dataNote = setTextField ('', currentTop, f.leftCol2_2, f.colWidth2);
    var datasubmissionData = ['APP','BLENDED'];
    var datasubmissionSelect = setSelectTableView(datasubmissionData);
        
    scrollView.add (lbl_datasubmission);
    scrollView.add (tf_datasubmission);
    scrollView.add (btn_datasubmission);
    scrollView.add (lbl_dataNote);
    scrollView.add (tf_dataNote);
        
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    var hdr_shipping = setHeader ('Shipping/Lab Information', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_shipping); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
    var lbl_shipInst = setLabel ('Fill out shipping info for each Lab samples will be sent to.  Further down the page, you will assign each sample to the appropriate lab/shipment',currentTop, f.colIndent, f.colWidth1);
    scrollView.add (lbl_shipInst); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    //create the list of labs used for shipping
    view.labArray = {};
    //labArray format is [Name,Date Sent,Airbill,Sender,Sender Phone,Shipping Method]
    view.labArray[1] = ['','','','','','',String(Math.floor(Math.random()*8999))];
    var labSelect = Titanium.UI.createTableView();
    var lbl_labNo = setLabel('Lab #',currentTop,f.colIndent + 50,f.colWidth4 - 50);
    lbl_labNo.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    scrollView.add(lbl_labNo);    
    currentTop += f.labelSpace;
    elementTop += f.labelSpace;
    var btn_leftLabNo = setLeftButton(currentTop,f.colIndent);
    var tf_labNo = setTextField('1',elementTop,f.colIndent + 50,f.colWidth4 - 50);
    var btn_rightLabNo = setRightButton(currentTop,f.leftCol4_2);
    scrollView.add(btn_leftLabNo,tf_labNo,btn_rightLabNo);
    
    btn_leftLabNo.addEventListener('click',function(e){
        if (tf_labNo.value > 1) {
            changeNum = Number(tf_labNo.value) - 1;
            changeLab(Number(tf_labNo.value),changeNum);
            tf_labNo.value = String(changeNum);
        }
    });
    btn_rightLabNo.addEventListener('click',function(e){
        changeNum = Number(tf_labNo.value) + 1;
        changeLab(Number(tf_labNo.value),changeNum);
        tf_labNo.value = String(changeNum);
    });
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    
    var pickerWin = setPopupWindow();
    var picker = Ti.UI.createPicker({
        useSpinner:true,
        type:Ti.UI.PICKER_TYPE_DATE,
        minDate:new Date(2015,03,01),
        maxDate:new Date(2015,10,31),
        value:new Date(2015,3,12),
        top:50      
    });
   
    var pickerButton = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'black',
        height:50,
        width:150,
        title:'Add date',
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:18,fontWeight:'bold'},
    });
   
    pickerWin.add(picker);
    pickerWin.add(pickerButton);   
    
      
    var lbl_labName = setLabelI ('Lab Name', currentTop, f.colIndent, f.colWidth4);
    var labNameMeta = setMetaView('Select name of national lab from dropdown or type in name of alternate lab.');
    lbl_labName.addEventListener('click', function() {
        view.add(labNameMeta);
        labNameMeta.show();
    });
    var tf_labName = setTextFieldHint ('', elementTop, f.leftCol4_2, f.colWidth4+20+f.colWidth4+20+f.colWidth4-f.buttonWidth, 'Select from list, or type in other lab name');
    tf_labName.addEventListener('change', function() {
        updateLab();
    });
    var btn_labName = new setDropdownButton((elementTop),(f.colWidth1+12-f.buttonWidth));
    var labNameData = ['WRS','GLEC','MED','MICROBAC'];
    var labNameSelect = setSelectTableView(labNameData);
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
      
    scrollView.add (lbl_labName);
    scrollView.add (tf_labName);
    scrollView.add (btn_labName); 
        
    var lbl_datesent = setLabel ('Date Sent',currentTop, f.colIndent, f.colWidth4);
    var tf_datesent = setTextFieldNumber('',elementTop,f.leftCol4_2, f.colWidth4-f.buttonWidth,'mmddyy');
    tf_datesent.addEventListener('change', function() {
        updateLab();
    });
    var lbl_airbill = setLabel ('Airbill No.',currentTop, f.leftCol4_3, f.colWidth4);
    var tf_airbill = setTextField ('', elementTop, f.leftCol4_4, f.colWidth4);
    tf_airbill.addEventListener('change', function() {
        updateLab();
    });
    btn_datesent = setDropdownButton(elementTop, f.leftCol4_2+(f.colWidth4-f.buttonWidth));
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_sender = setLabel ('Sender', currentTop, f.colIndent, f.colWidth4);
    var tf_sender = setTextField ('',elementTop, f.leftCol4_2, f.colWidth4);
    tf_sender.addEventListener('change', function() {
        updateLab();
    });
    var lbl_senderph = setLabel ('Sender Phone', elementTop-7, f.leftCol4_3, f.colWidth4);
    var tf_senderph = setTextFieldNumber('', elementTop, f.leftCol4_4, f.colWidth4,'enter numbers');
    tf_senderph.addEventListener('change', function() {
        updateLab();
    });
        
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    var lbl_shmethod = setLabel ('Shipping Method',elementTop-7, f.colIndent, f.colWidth4);
    var tf_shmethod = setTextField ('', elementTop, f.leftCol4_2, f.colWidth4-f.buttonWidth);
    tf_shmethod.addEventListener('change', function() {
        updateLab();
    });
    var btn_shmethod = new setDropdownButton((elementTop),(f.leftCol4_2 + f.colWidth4 - f.buttonWidth));
    var shmethodData = ['FEDEX','UPS','HAND_DELIVERY'];
    var shmethodSelect = setSelectTableView(shmethodData);
        
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    scrollView.add (lbl_datesent);
    scrollView.add (tf_datesent);
    scrollView.add(btn_datesent);
    scrollView.add (lbl_sender);
    scrollView.add (tf_sender);
    scrollView.add (lbl_senderph);
    scrollView.add (tf_senderph);
    scrollView.add (lbl_shmethod);
    scrollView.add (tf_shmethod);
    scrollView.add (btn_shmethod);
    scrollView.add (lbl_airbill);
    scrollView.add (tf_airbill);  
    
    //button events*/
    
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
    btn_datesent.addEventListener('click', function() {
          pickerWin.open();
    });
    picker.addEventListener('change',function(e){
        tf_datesent.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear();
    });
    pickerButton.addEventListener('click',function(){
         pickerWin.close();  
    });
    tf_datesent.addEventListener(eventListener, function() {
        tf_datesent.value = entryMask(tf_datesent.value,'date');
    }); 
    
    
          
    var hdr_sampTrack = setHeader ('Sample Tracking', currentTop, f.colIndent, f.colWidth1);
    scrollView.add (hdr_sampTrack); 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;         
                
    var lbl_sampleType = setVLabel ('Sample Type', currentTop, f.colIndent, f.colWidth4, f.colWidth5);
    var lbl_notCollected = setVLabel ('Not Collected', currentTop, f.leftCol5_2, f.colWidth5, f.colWidth5);
    var lbl_sampleID = setVLabel ('Sample ID', currentTop, f.leftCol5_3, f.colWidth5, f.colWidth5);
    var lbl_lab = setVLabel ('LAB-SHIP', currentTop, f.leftCol5_4, f.colWidth6, f.colWidth5);
    var lbl_comment = setVLabel ('Comments',currentTop, f.leftCol5_5, (f.colWidth5), f.colWidth5);
        
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
    currentTop += f.otherSpace;
    elementTop += f.otherSpace; 
          
    //CHEM SAMPLE
    var lbl_sampleCHEM = setLabel ('CHEM', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotCHEM = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDCHEM = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labCHEM = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labCHEM = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentCHEM = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleType);
    scrollView.add (lbl_notCollected);
    scrollView.add (lbl_sampleID);
    scrollView.add (lbl_lab);
    scrollView.add (lbl_comment);
    scrollView.add (lbl_sampleCHEM);
    scrollView.add (btn_radionotCHEM);
    scrollView.add (lbl_sampleIDCHEM);
    scrollView.add (tf_labCHEM);
    scrollView.add (btn_labCHEM);
    scrollView.add (tf_commentCHEM);
      
    //CHLA SAMPLE
    var lbl_sampleCHLA = setLabel ('CHLA', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotCHLA = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDCHLA = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labCHLA = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labCHLA = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentCHLA = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleCHLA);
    scrollView.add (btn_radionotCHLA);
    scrollView.add (lbl_sampleIDCHLA);
    scrollView.add (tf_labCHLA);
    scrollView.add (btn_labCHLA);
    scrollView.add (tf_commentCHLA);
      
    //NUTS SAMPLE
    var lbl_sampleNUTS = setLabel ('NUTS', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotNUTS = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDNUTS = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labNUTS = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labNUTS = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentNUTS = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleNUTS);
    scrollView.add (btn_radionotNUTS);
    scrollView.add (lbl_sampleIDNUTS);
    scrollView.add (tf_labNUTS);
    scrollView.add (btn_labNUTS);
    scrollView.add (tf_commentNUTS);
 
    //SEDG SAMPLE
    var lbl_sampleSEDG = setLabel ('SEDG', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotSEDG = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDSEDG = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labSEDG = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labSEDG = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentSEDG = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleSEDG);
    scrollView.add (btn_radionotSEDG);
    scrollView.add (lbl_sampleIDSEDG);
    scrollView.add (tf_labSEDG);
    scrollView.add (btn_labSEDG);
    scrollView.add (tf_commentSEDG);
   
     //SEDX SAMPLE
    var lbl_sampleSEDX = setLabel ('SEDX', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotSEDX = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDSEDX = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labSEDX = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labSEDX = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentSEDX = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleSEDX);
    scrollView.add (btn_radionotSEDX);
    scrollView.add (lbl_sampleIDSEDX);
    scrollView.add (tf_labSEDX);
    scrollView.add (btn_labSEDX);
    scrollView.add (tf_commentSEDX);
    
   
    //PHYT SAMPLE
    var lbl_samplePHYT = setLabel ('PHYT', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotPHYT = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDPHYT = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labPHYT = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labPHYT = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentPHYT = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_samplePHYT);
    scrollView.add (btn_radionotPHYT);
    scrollView.add (lbl_sampleIDPHYT);
    scrollView.add (tf_labPHYT);
    scrollView.add (btn_labPHYT);
    scrollView.add (tf_commentPHYT);
        
     //ALGX SAMPLE
    var lbl_sampleALGX = setLabel ('ALGX', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotALGX = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDALGX = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labALGX = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labALGX = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentALGX = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleALGX);
    scrollView.add (btn_radionotALGX);
    scrollView.add (lbl_sampleIDALGX);
    scrollView.add (tf_labALGX);
    scrollView.add (btn_labALGX);
    scrollView.add (tf_commentALGX);
  
    //ENTE SAMPLE
    var lbl_sampleENTE = setLabel ('ENTE', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotENTE = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDENTE = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labENTE = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labENTE = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentENTE = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
            
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleENTE);
    scrollView.add (btn_radionotENTE);
    scrollView.add (lbl_sampleIDENTE);
    scrollView.add (tf_labENTE);
    scrollView.add (btn_labENTE);
    scrollView.add (tf_commentENTE);
           
    //MICX SAMPLE
    var lbl_sampleMICX = setLabel ('MICX', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotMICX = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDMICX = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labMICX = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labMICX = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentMICX = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
 
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleMICX);
    scrollView.add (btn_radionotMICX);
    scrollView.add (lbl_sampleIDMICX);
    scrollView.add (tf_labMICX);
    scrollView.add (btn_labMICX);
    scrollView.add (tf_commentMICX);
  
     //FPLG SAMPLE
    var lbl_sampleFPLG = setLabel ('FPLG', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotFPLG = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDFPLG = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labFPLG = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labFPLG = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentFPLG = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
  
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleFPLG);
    scrollView.add (btn_radionotFPLG);
    scrollView.add (lbl_sampleIDFPLG);
    scrollView.add (tf_labFPLG);
    scrollView.add (btn_labFPLG);
    scrollView.add (tf_commentFPLG);
             
    //SEDC SAMPLE
    var lbl_sampleSEDC = setLabel ('SEDC', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotSEDC = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDSEDC = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labSEDC = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labSEDC = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentSEDC = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleSEDC);
    scrollView.add (btn_radionotSEDC);
    scrollView.add (lbl_sampleIDSEDC);
    scrollView.add (tf_labSEDC);
    scrollView.add (btn_labSEDC);
    scrollView.add (tf_commentSEDC);
                      
    //SEDO SAMPLE
    var lbl_sampleSEDO = setLabel ('SEDO', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotSEDO = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDSEDO = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labSEDO = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labSEDO = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentSEDO = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleSEDO);
    scrollView.add (btn_radionotSEDO);
    scrollView.add (lbl_sampleIDSEDO);
    scrollView.add (tf_labSEDO);
    scrollView.add (btn_labSEDO);
    scrollView.add (tf_commentSEDO);
  
    //FTIS SAMPLE
    var lbl_sampleFTIS = setLabel ('FTIS', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotFTIS = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDFTIS = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labFTIS = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labFTIS = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentFTIS = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
     
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleFTIS);
    scrollView.add (btn_radionotFTIS);
    scrollView.add (lbl_sampleIDFTIS);
    scrollView.add (tf_labFTIS);
    scrollView.add (btn_labFTIS);
    scrollView.add (tf_commentFTIS);
                
  
    //BENT SAMPLE
    var lbl_sampleBENT = setLabel ('BENT', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotBENT = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDBENT = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labBENT = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labBENT = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentBENT = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
    
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleBENT);
    scrollView.add (btn_radionotBENT);
    scrollView.add (lbl_sampleIDBENT);
    scrollView.add (tf_labBENT);
    scrollView.add (btn_labBENT);
    scrollView.add (tf_commentBENT);
                
    
    //HTIS SAMPLE
    var lbl_sampleHTIS = setLabel ('HTIS', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotHTIS = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDHTIS = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labHTIS = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labHTIS = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentHTIS = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
     
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleHTIS);
    scrollView.add (btn_radionotHTIS);
    scrollView.add (lbl_sampleIDHTIS);
    scrollView.add (tf_labHTIS);
    scrollView.add (btn_labHTIS);
    scrollView.add (tf_commentHTIS);
            
                         
    //UVID SAMPLE
    var lbl_sampleUVID = setLabel ('UVID', currentTop, f.colIndent, f.colWidth5);
    var btn_radionotUVID = setRadioButton((currentTop),(f.leftCol5_2),false);
    var lbl_sampleIDUVID = setLabel('',currentTop, f.leftCol5_3, f.colWidth5);     
    var tf_labUVID = setTextFieldHint('',currentTop,f.leftCol5_4,f.colWidth5-f.buttonWidth,'Select Lab');
    var btn_labUVID = setDropdownButton(elementTop,(f.leftCol5_4 + f.colWidth5 - f.buttonWidth));
    var tf_commentUVID = setTextField ('',currentTop, f.leftCol5_5, (f.colWidth5));
   
    currentTop += f.otherSpace;
    elementTop += f.otherSpace;
                    
    scrollView.add (lbl_sampleUVID);
    scrollView.add (btn_radionotUVID);
    scrollView.add (lbl_sampleIDUVID);
    scrollView.add (tf_labUVID);
    scrollView.add (btn_labUVID);
    scrollView.add (tf_commentUVID);
             
    //button events
    btn_datasubmission.addEventListener('click', function() {
        popupWin.add(datasubmissionSelect);
        popupWin.open();
    });
    datasubmissionSelect.addEventListener('click',function(e){
        tf_datasubmission.value = e.rowData.rowValue;
        popupWin.remove(datasubmissionSelect);
        popupWin.close();
    });
    btn_labName.addEventListener('click', function() {
        popupWin.add(labNameSelect);
        popupWin.open();
    });
    labNameSelect.addEventListener('click',function(e){
        tf_labName.value = e.rowData.rowValue;
        popupWin.remove(labNameSelect);
        popupWin.close();
    });
    btn_shmethod.addEventListener('click', function() {
        popupWin.add(shmethodSelect);
        popupWin.open();
     });
    shmethodSelect.addEventListener('click',function(e){
        tf_shmethod.value = e.rowData.rowValue;
        popupWin.remove(shmethodSelect);
        popupWin.close();
    });
    
    btn_labCHEM.addEventListener('click',function(){
        labCHEMSelect = labDrop(tf_labCHEM);
        popupWin.add(labCHEMSelect);
        popupWin.open();
    });
    btn_labCHLA.addEventListener('click',function(){
        labCHLASelect = labDrop(tf_labCHLA);
        popupWin.add(labCHLASelect);
        popupWin.open();
    });
    btn_labNUTS.addEventListener('click',function(){
        labNUTSSelect = labDrop(tf_labNUTS);
        popupWin.add(labNUTSSelect);
        popupWin.open();
    });
    btn_labSEDG.addEventListener('click',function(){
        labSEDGSelect = labDrop(tf_labSEDG);
        popupWin.add(labSEDGSelect);
        popupWin.open();
    });   
    btn_labSEDX.addEventListener('click',function(){
        labSEDXSelect = labDrop(tf_labSEDX);
        popupWin.add(labSEDXSelect);
        popupWin.open();
    });       
    btn_labPHYT.addEventListener('click',function(){
        labPHYTSelect = labDrop(tf_labPHYT);
        popupWin.add(labPHYTSelect);
        popupWin.open();
    });
    btn_labALGX.addEventListener('click',function(){
        labALGXSelect = labDrop(tf_labALGX);
        popupWin.add(labALGXSelect);
        popupWin.open();
    });
   btn_labENTE.addEventListener('click',function(){
        labENTESelect = labDrop(tf_labENTE);
        popupWin.add(labENTESelect);
        popupWin.open();
    });
    btn_labMICX.addEventListener('click',function(){
        labMICXSelect = labDrop(tf_labMICX);
        popupWin.add(labMICXSelect);
        popupWin.open();
    });
    btn_labFPLG.addEventListener('click',function(){
        labFPLGSelect = labDrop(tf_labFPLG);
        popupWin.add(labFPLGSelect);
        popupWin.open();
    });     
    btn_labSEDC.addEventListener('click',function(){
        labSEDCSelect = labDrop(tf_labSEDC);
        popupWin.add(labSEDCSelect);
        popupWin.open();
    });
    btn_labSEDO.addEventListener('click',function(){
        labSEDOSelect = labDrop(tf_labSEDO);
        popupWin.add(labSEDOSelect);
        popupWin.open();
    });
    btn_labBENT.addEventListener('click',function(){
        labBENTSelect = labDrop(tf_labBENT);
        popupWin.add(labBENTSelect);
        popupWin.open();
    });
    btn_labFTIS.addEventListener('click',function(){
        labFTISSelect = labDrop(tf_labFTIS);
        popupWin.add(labFTISSelect);
        popupWin.open();
    });
    btn_labHTIS.addEventListener('click',function(){
        labHTISSelect = labDrop(tf_labHTIS);
        popupWin.add(labHTISSelect);
        popupWin.open();
    }); 
    btn_labUVID.addEventListener('click',function(){
        labUVIDSelect = labDrop(tf_labUVID);
        popupWin.add(labUVIDSelect);
        popupWin.open();
    });

    function labDrop(textField){
        labData = [];
        shipIdData = [];
        var size = 0, key;
        for (key in view.labArray) {
            if (view.labArray.hasOwnProperty(key)) size++;
        }
        for (var i = 1; i < size+1; i++) {
            labData[i-1] = view.labArray[i][0] + "-" + view.labArray[i][1];
            shipIdData[i-1] = view.labArray[i][6];
        }
        //update labSelect
        var select = setTableView(labData,shipIdData);
        
        select.addEventListener('click',function(e){
            textField.value = e.rowData.rowValue;
            textField.shipID = e.rowData.viewValue;
            popupWin.remove(select);
            popupWin.close();
        });
        return select;
    }
 
    if (Titanium.Platform.name == 'android') {
        eventListener = "blur";
    } else {
        eventListener = "change";
    }
 
    tf_datesent.addEventListener(eventListener, function() {
          tf_datesent.value = entryMask(tf_datesent.value,'date');
    });
    tf_senderph.addEventListener(eventListener, function() {
          tf_senderph.value = entryMask(tf_senderph.value,'phone');
    });
    
    
    function findLab(shipID) {
        var size = 0, key;
        for (key in view.labArray) {
            if (view.labArray.hasOwnProperty(key)) size++;
        }
        var index = 0;
        for (var i = 1; i < size+1; i++) {
            if (view.labArray[i][6] === shipID) {
                index = i;
            }
        }
        return index;
    }

    function changeLab(labNo,changeNum){
        var tempArray = view.labArray;
        if (!(changeNum in tempArray)){
            tempArray[changeNum] = ['','','','','','',String(Math.floor(Math.random()*8999))];
        }
        tempArray[labNo][0] = tf_labName.value;
        tempArray[labNo][1] = tf_datesent.value;
        tempArray[labNo][2] = tf_airbill.value;
        tempArray[labNo][3] = tf_sender.value;
        tempArray[labNo][4] = tf_senderph.value;
        tempArray[labNo][5] = tf_shmethod.value;
        
        tf_labName.value = tempArray[changeNum][0];
        tf_datesent.value = tempArray[changeNum][1];
        tf_airbill.value = tempArray[changeNum][2];
        tf_sender.value = tempArray[changeNum][3];
        tf_senderph.value = tempArray[changeNum][4];
        tf_shmethod.value = tempArray[changeNum][5];
        
        view.labArray = tempArray;
    };    
    function updateLab(){
        var tempArray = view.labArray;
        tempArray[tf_labNo.value][0] = tf_labName.value;
        tempArray[tf_labNo.value][1] = tf_datesent.value;
        tempArray[tf_labNo.value][2] = tf_airbill.value;
        tempArray[tf_labNo.value][3] = tf_sender.value;
        tempArray[tf_labNo.value][4] = tf_senderph.value;
        tempArray[tf_labNo.value][5] = tf_shmethod.value;
        
        view.labArray = tempArray;
    };    
    
    btn_update.addEventListener ('click', function(e) {
        //changeLab(Number(tf_labNo.value), Number(tf_labNo.value) + 1);
        
        formTrackingDict['DATA_SUBMISSION'] = tf_datasubmission.value;
        formTrackingDict['DATA_NOTE'] = tf_dataNote.value;
        if (btn_radionotCHEM.state !== true) {
            var i = findLab(tf_labCHEM.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'WRS'){
                    formTrackingDict['CHEM_WRS'] = 'Y';
                    formTrackingDict['CHEM_LAB'] = '';
                } else {
                    formTrackingDict['CHEM_WRS'] = 'N';
                    formTrackingDict['CHEM_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['CHEM_T1_1'] = tf_commentCHEM.value;
                formTrackingDict['CHEM_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['CHEM_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['CHEM_SENDER'] = view.labArray[i][3];
                formTrackingDict['CHEM_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['CHEM_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['CHEM_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotCHLA.state !== true) {
            var i = findLab(tf_labCHLA.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'WRS'){
                    formTrackingDict['CHLA_WRS'] = 'Y';
                    formTrackingDict['CHLA_LAB'] = '';
                } else {
                    formTrackingDict['CHLA_WRS'] = 'N';
                    formTrackingDict['CHLA_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['CHLA_T1_2'] = tf_commentCHLA.value;
                formTrackingDict['CHLA_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['CHLA_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['CHLA_SENDER'] = view.labArray[i][3];
                formTrackingDict['CHLA_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['CHLA_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['CHLA_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotNUTS.state !== true) {
            var i = findLab(tf_labNUTS.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'WRS'){
                    formTrackingDict['NUTS_WRS'] = 'Y';
                    formTrackingDict['NUTS_LAB'] = '';
                } else {
                    formTrackingDict['NUTS_WRS'] = 'N';
                    formTrackingDict['NUTS_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['NUTS_T1_3'] = tf_commentNUTS.value;
                formTrackingDict['NUTS_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['NUTS_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['NUTS_SENDER'] = view.labArray[i][3];
                formTrackingDict['NUTS_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['NUTS_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['NUTS_AIRBILL'] = view.labArray[i][2];
            }
        }       
        if (btn_radionotSEDG.state !== true) {
            var i = findLab(tf_labSEDG.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['SEDG_GLEC'] = 'Y';
                    formTrackingDict['SEDG_LAB'] = '';
                } else {
                    formTrackingDict['SEDG_GLEC'] = 'N';
                    formTrackingDict['SEDG_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['SEDG_T2_1'] = tf_commentSEDG.value;
                formTrackingDict['SEDG_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['SEDG_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['SEDG_SENDER'] = view.labArray[i][3];
                formTrackingDict['SEDG_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['SEDG_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['SEDG_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotSEDX.state !== true) {
            var i = findLab(tf_labSEDX.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['SEDX_GLEC'] = 'Y';
                    formTrackingDict['SEDX_LAB'] = '';
                } else {
                    formTrackingDict['SEDX_GLEC'] = 'N';
                    formTrackingDict['SEDX_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['SEDX_T2_2'] = tf_commentSEDX.value;
                formTrackingDict['SEDX_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['SEDX_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['SEDX_SENDER'] = view.labArray[i][3];
                formTrackingDict['SEDX_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['SEDX_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['SEDX_AIRBILL'] = view.labArray[i][2];
            }
        }        
       
        if (btn_radionotPHYT.state !== true) {
            var i = findLab(tf_labPHYT.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['PHYT_GLEC'] = 'Y';
                    formTrackingDict['PHYT_LAB'] = '';
                } else {
                    formTrackingDict['PHYT_GLEC'] = 'N';
                    formTrackingDict['PHYT_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['PHYT_T2_4'] = tf_commentPHYT.value;
                formTrackingDict['PHYT_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['PHYT_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['PHYT_SENDER'] = view.labArray[i][3];
                formTrackingDict['PHYT_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['PHYT_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['PHYT_AIRBILL'] = view.labArray[i][2];
            }
        } 
        if (btn_radionotALGX.state !== true) {
            var i = findLab(tf_labALGX.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['ALGX_GLEC'] = 'Y';
                    formTrackingDict['ALGX_LAB'] = '';
                } else {
                    formTrackingDict['ALGX_GLED'] = 'N';
                    formTrackingDict['ALGX_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['ALGX_T3_1'] = tf_commentALGX.value;
                formTrackingDict['ALGX_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['ALGX_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['ALGX_SENDER'] = view.labArray[i][3];
                formTrackingDict['ALGX_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['ALGX_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['ALGX_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotENTE.state !== true) {
            var i = findLab(tf_labENTE.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['ENTE_GLEC'] = 'Y';
                    formTrackingDict['ENTE_LAB'] = '';
                } else {
                    formTrackingDict['ENTE_GLEC'] = 'N';
                    formTrackingDict['ENTE_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['ENTE_T3_2'] = tf_commentENTE.value;
                formTrackingDict['ENTE_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['ENTE_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['ENTE_SENDER'] = view.labArray[i][3];
                formTrackingDict['ENTE_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['ENTE_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['ENTE_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotMICX.state !== true) {
            var i = findLab(tf_labMICX.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['MICX_GLEC'] = 'Y';
                    formTrackingDict['MICX_LAB'] = '';
                } else {
                    formTrackingDict['MICX_GLEC'] = 'N';
                    formTrackingDict['MICX_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['MICX_T3_3'] = tf_commentMICX.value;
                formTrackingDict['MICX_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['MICX_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['MICX_SENDER'] = view.labArray[i][3];
                formTrackingDict['MICX_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['MICX_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['MICX_AIRBILL'] = view.labArray[i][2];
            }
         }   
        if (btn_radionotFPLG.state !== true) {
            var i = findLab(tf_labFPLG.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['FPLG_GLEC'] = 'Y';
                    formTrackingDict['FPLG_LAB'] = '';
                } else {
                    formTrackingDict['FPLG_GLEC'] = 'N';
                    formTrackingDict['FPLG_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['FPLG_T3_4'] = tf_commentFPLG.value;
                formTrackingDict['FPLG_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['FPLG_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['FPLG_SENDER'] = view.labArray[i][3];
                formTrackingDict['FPLG_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['FPLG_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['FPLG_AIRBILL'] = view.labArray[i][2];
            }
        } 
        if (btn_radionotSEDC.state !== true) {
            var i = findLab(tf_labSEDC.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['SEDC_GLEC'] = 'Y';
                    formTrackingDict['SEDC_LAB'] = '';
                } else {
                    formTrackingDict['SEDC_GLEC'] = 'N';
                    formTrackingDict['SEDC_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['SEDC_T3_5'] = tf_commentSEDC.value;
                formTrackingDict['SEDC_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['SEDC_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['SEDC_SENDER'] = view.labArray[i][3];
                formTrackingDict['SEDC_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['SEDC_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['SEDC_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotSEDO.state !== true) {
            var i = findLab(tf_labSEDO.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['SEDO_GLEC'] = 'Y';
                    formTrackingDict['SEDO_LAB'] = '';
                } else {
                    formTrackingDict['SEDO_GLEC'] = 'N';
                    formTrackingDict['SEDO_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['SEDO_T3_6'] = tf_commentSEDO.value;
                formTrackingDict['SEDO_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['SEDO_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['SEDO_SENDER'] = view.labArray[i][3];
                formTrackingDict['SEDO_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['SEDO_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['SEDO_AIRBILL'] = view.labArray[i][2];
            }
        }        
        if (btn_radionotBENT.state !== true) {
            var i = findLab(tf_labBENT.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['BENT_GLEC'] = 'Y';
                    formTrackingDict['BENT_LAB'] = '';
                } else {
                    formTrackingDict['BENT_GLEC'] = 'N';
                    formTrackingDict['BENT_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['BENT_T4_1'] = tf_commentBENT.value;
                formTrackingDict['BENT_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['BENT_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['BENT_SENDER'] = view.labArray[i][3];
                formTrackingDict['BENT_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['BENT_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['BENT_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotFTIS.state !== true) {
            var i = findLab(tf_labFTIS.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'GLEC'){
                    formTrackingDict['FTIS_GLEC'] = 'Y';
                    formTrackingDict['FTIS_LAB'] = '';
                } else {
                    formTrackingDict['FTIS_GLEC'] = 'N';
                    formTrackingDict['FTIS_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['FTIS_T5_1'] = tf_commentFTIS.value;
                formTrackingDict['FTIS_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['FTIS_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['FTIS_SENDER'] = view.labArray[i][3];
                formTrackingDict['FTIS_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['FTIS_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['FTIS_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotHTIS.state !== true) {
            var i = findLab(tf_labFTIS.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'MICROBAC'){
                    formTrackingDict['HTIS_MICROBAC'] = 'Y';
                    formTrackingDict['HTIS_LAB'] = '';
                } else {
                    formTrackingDict['HTIS_MICROBAC'] = 'N';
                    formTrackingDict['HTIS_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['HTIS_T7_1'] = tf_commentHTIS.value;
                formTrackingDict['HTIS_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['HTIS_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['HTIS_SENDER'] = view.labArray[i][3];
                formTrackingDict['HTIS_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['HTIS_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['HTIS_AIRBILL'] = view.labArray[i][2];
            }
        }
        if (btn_radionotUVID.state !== true) {
            var i = findLab(tf_labUVID.shipID);
            if (!(i===0)) {
                if (view.labArray[i][0] === 'MED'){
                    formTrackingDict['UVID_MED'] = 'Y';
                    formTrackingDict['UVID_LAB'] = '';
                } else {
                    formTrackingDict['UVID_MED'] = 'N';
                    formTrackingDict['UVID_LAB'] = view.labArray[i][0];
                }
                formTrackingDict['UVID_T8_1'] = tf_commentUVID.value;
                formTrackingDict['UVID_SHIP_ID'] = view.labArray[i][6];
                formTrackingDict['UVID_DATE_SENT'] = view.labArray[i][1];
                formTrackingDict['UVID_SENDER'] = view.labArray[i][3];
                formTrackingDict['UVID_SENDER_PHONE'] = view.labArray[i][4];
                formTrackingDict['UVID_SHIPPING_METHOD'] = view.labArray[i][5];
                formTrackingDict['UVID_AIRBILL'] = view.labArray[i][2];
            }
        }

        saveJSON(formTrackingDict,view.uid + '_TRACKING.json');
        saveJSON(view.labArray,view.uid + '_TRACKING_labInfo.json');
    });
    
    view.addEventListener("updateFormTracking",function(e){
        //reset dictionary
        formSampleDict = openFormSampleDict();
        formTrackingDict = openFormTrackingDict();
        formFishEcoDict = openFormFishEcoDict();
        formFishHumanDict = openFormFishHumanDict();
        view.uid = e.siteid + '_' + e.visitno;      
        
        retrieveJSON(formSampleDict,view.uid + '_SAMPLECOLLECTION.json');
        retrieveJSON(formFishEcoDict, view.uid + '_FISHECO.json');
        retrieveJSON(formFishHumanDict, view.uid + '_FISHHUMAN.json');
        retrieveJSON(formTrackingDict,view.uid + '_TRACKING.json');
        
        var tempArray = {};
        tempArray[1] = ['','','','','','',String(Math.floor(Math.random()*8999))];
        view.labArray = tempArray;
        //lab data
        tf_labNo.value = '1';
        tf_labName.value = '';
        tf_datesent.value = '';
        tf_airbill.value = '';
        tf_sender.value = '';
        tf_senderph.value = '';
        tf_shmethod.value = '';
        var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_TRACKING_labInfo.json');
        //var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'TRACKING_labInfo.json');
        if (jsonFile.exists()) {
            var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,view.uid + '_TRACKING_labInfo.json');
            //var jsonFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'TRACKING_labInfo.json');
            var data = jsonFile.read().text;
            var tempArray2 = {};
            tempArray2 = JSON.parse(data);
            view.labArray = tempArray2;
            
            tf_labName.value = view.labArray[1][0];
            tf_datesent.value = view.labArray[1][1];
            tf_airbill.value = view.labArray[1][2];
            tf_sender.value = view.labArray[1][3];
            tf_senderph.value = view.labArray[1][4];
            tf_shmethod.value = view.labArray[1][5];
        }
        
        tf_datasubmission.value = formTrackingDict['DATA_SUBMISSION'];
        tf_dataNote.value = formTrackingDict['DATA_NOTE'];
        
        if (formSampleDict['CHEM_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotCHEM,true);
            lbl_sampleIDCHEM.text = formSampleDict['CHEM_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotCHEM,false);
            lbl_sampleIDCHEM.text = formSampleDict['CHEM_SAMPLE_ID'];
            if (formTrackingDict['CHEM_WRS'] === 'Y') {
                tf_labCHEM.value = 'WRS' + '-' + formTrackingDict['CHEM_DATE_SENT'];
            } else {
                tf_labCHEM.value = formTrackingDict['CHEM_LAB'] + '-' + formTrackingDict['CHEM_DATE_SENT'];
            }
            tf_commentCHEM.value = formTrackingDict['CHEM_T1_1'];
            tf_labCHEM.shipID = formTrackingDict['CHEM_SHIP_ID'];
        }
        if (formSampleDict['CHLA_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotCHLA,true);
            lbl_sampleIDCHLA.text = formSampleDict['CHLA_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotCHLA,false);
            lbl_sampleIDCHLA.text = formSampleDict['CHLA_SAMPLE_ID'];
            if (formTrackingDict['CHLA_WRS'] === 'Y') {
                tf_labCHLA.value = 'WRS' + '-' + formTrackingDict['CHLA_DATE_SENT'];
            } else {
                tf_labCHLA.value = formTrackingDict['CHLA_LAB'] + '-' + formTrackingDict['CHLA_DATE_SENT'];
            }
            tf_commentCHLA.value = formTrackingDict['CHLA_T1_2'];
            tf_labCHLA.shipID = formTrackingDict['CHLA_SHIP_ID'];
        }
        if (formSampleDict['NUTS_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotNUTS,true);
            lbl_sampleIDNUTS.text = formSampleDict['NUTS_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotNUTS,false);
            lbl_sampleIDNUTS.text = formSampleDict['NUTS_SAMPLE_ID'];
            if (formTrackingDict['NUTS_WRS'] === 'Y') {
                tf_labNUTS.value = 'WRS' + '-' + formTrackingDict['NUTS_DATE_SENT'];
            } else {
                tf_labNUTS.value = formTrackingDict['NUTS_LAB'] + '-' + formTrackingDict['NUTS_DATE_SENT'];
            }
            tf_commentNUTS.value = formTrackingDict['NUTS_T1_3'];
            tf_labNUTS.shipID = formTrackingDict['NUTS_SHIP_ID'];
        }
        if (formSampleDict['SEDG_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotSEDG,true);
            lbl_sampleIDSEDG.text = formSampleDict['SEDG_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotSEDG,false);
            lbl_sampleIDSEDG.text = formSampleDict['SEDG_SAMPLE_ID'];
            if (formTrackingDict['SEDG_GLEC'] === 'Y') {
                tf_labSEDG.value = 'GLEC' + '-' + formTrackingDict['SEDG_DATE_SENT'];
            } else {
                tf_labSEDG.value = formTrackingDict['SEDG_LAB'] + '-' + formTrackingDict['SEDG_DATE_SENT'];
            }
            tf_commentSEDG.value = formTrackingDict['SEDD_T2_1'];
            tf_labSEDG.shipID = formTrackingDict['SEDG_SHIP_ID'];
        }
        if (formSampleDict['SEDX_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotSEDX,true);
            lbl_sampleIDSEDX.text = formSampleDict['SEDX_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotSEDX,false);
            lbl_sampleIDSEDX.text = formSampleDict['SEDX_SAMPLE_ID'];
            if (formTrackingDict['SEDX_GLEC'] === 'Y') {
                tf_labSEDX.value = 'GLEC' + '-' + formTrackingDict['SEDX_DATE_SENT'];
            } else {
                tf_labSEDX.value = formTrackingDict['SEDX_LAB'] + '-' + formTrackingDict['SEDX_DATE_SENT'];
            }
            tf_commentSEDX.value = formTrackingDict['SEDX_T2_2'];
            tf_labSEDX.shipID = formTrackingDict['SEDX_SHIP_ID'];
        }
 
        if (formSampleDict['PHYT_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotPHYT,true);
            lbl_sampleIDPHYT.text = formSampleDict['PHYT_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotPHYT,false);
            lbl_sampleIDPHYT.text = formSampleDict['PHYT_SAMPLE_ID'];
            if (formTrackingDict['PHYT_GLEC'] === 'Y') {
                tf_labPHYT.value = 'GLEC' + '-' + formTrackingDict['PHYT_DATE_SENT'];
            } else {
                tf_labPHYT.value = formTrackingDict['PHYT_LAB'] + '-' + formTrackingDict['PHYT_DATE_SENT'];
            }
            tf_commentPHYT.value = formTrackingDict['PHYT_T2_4'];
            tf_labPHYT.shipID = formTrackingDict['PHYT_SHIP_ID'];
        }        
        if (formSampleDict['ALGX_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotALGX,true);
            lbl_sampleIDALGX.text = formSampleDict['ALGX_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotALGX,false);
            lbl_sampleIDALGX.text = formSampleDict['ALGX_SAMPLE_ID'];
            if (formTrackingDict['ALGX_GLEC'] === 'Y') {
                tf_labALGX.value = 'GLEC' + '-' + formTrackingDict['ALGX_DATE_SENT'];
            } else {
                tf_labALGX.value = formTrackingDict['ALGX_LAB'] + '-' + formTrackingDict['ALGX_DATE_SENT'];
            }
            tf_commentALGX.value = formTrackingDict['ALGX_T3_1'];
            tf_labALGX.shipID = formTrackingDict['ALGX_SHIP_ID'];
        }
        if (formSampleDict['ENTE_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotENTE,true);
            lbl_sampleIDENTE.text = formSampleDict['ENTE_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotENTE,false);
            lbl_sampleIDENTE.text = formSampleDict['ENTE_SAMPLE_ID'];
            if (formTrackingDict['ENTE_GLEC'] === 'Y') {
                tf_labENTE.value = 'GLEC' + '-' + formTrackingDict['ENTE_DATE_SENT'];
            } else {
                tf_labENTE.value = formTrackingDict['ENTE_LAB'] + '-' + formTrackingDict['ENTE_DATE_SENT'];
            }
            tf_commentENTE.value = formTrackingDict['ENTE_T3_2'];
            tf_labENTE.shipID = formTrackingDict['ENTE_SHIP_ID'];
        }
        if (formSampleDict['MICX_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotMICX,true);
            lbl_sampleIDMICX.text = formSampleDict['MICX_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotMICX,false);
            lbl_sampleIDMICX.text = formSampleDict['MICX_SAMPLE_ID'];
            if (formTrackingDict['MICX_GLEC'] === 'Y') {
                tf_labMICX.value = 'GLEC' + '-' + formTrackingDict['MICX_DATE_SENT'];
            } else {
                tf_labMICX.value = formTrackingDict['MICX_LAB'] + '-' + formTrackingDict['MICX_DATE_SENT'];
            }
            tf_commentMICX.value = formTrackingDict['MICX_T3_3'];
            tf_labMICX.shipID = formTrackingDict['MICX_SHIP_ID'];
        }
        if (formFishEcoDict['FPLG_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotFPLG,true);
            lbl_sampleIDFPLG.text = formFishEcoDict['FPLG_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotFPLG,false);
            lbl_sampleIDFPLG.text = formFishEcoDict['FPLG_SAMPLE_ID'];
            if (formTrackingDict['FPLG_GLEC'] === 'Y') {
                tf_labFPLG.value = 'GLEC' + '-' + formTrackingDict['FPLG_DATE_SENT'];
            } else {
                tf_labFPLG.value = formTrackingDict['FPLG_LAB'] + '-' + formTrackingDict['FPLG_DATE_SENT'];
            }
            tf_commentFPLG.value = formTrackingDict['FPLG_T3_4'];
            tf_labFPLG.shipID = formTrackingDict['FPLG_SHIP_ID'];
        } 
        if (formSampleDict['SEDC_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotSEDC,true);
            lbl_sampleIDSEDC.text = formSampleDict['SEDC_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotSEDC,false);
            lbl_sampleIDSEDC.text = formSampleDict['SEDC_SAMPLE_ID'];
            if (formTrackingDict['SEDC_GLEC'] === 'Y') {
                tf_labSEDC.value = 'GLEC' + '-' + formTrackingDict['SEDC_DATE_SENT'];
            } else {
                tf_labSEDC.value = formTrackingDict['SEDC_LAB'] + '-' + formTrackingDict['SEDC_DATE_SENT'];
            }
            tf_commentSEDC.value = formTrackingDict['SEDC_T3_5'];
            tf_labSEDC.shipID = formTrackingDict['SEDC_SHIP_ID'];
        }
        if (formSampleDict['SEDO_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotSEDO,true);
            lbl_sampleIDSEDO.text = formSampleDict['SEDO_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotSEDO,false);
            lbl_sampleIDSEDO.text = formSampleDict['SEDO_SAMPLE_ID'];
            if (formTrackingDict['SEDO_GLEC'] === 'Y') {
                tf_labSEDO.value = 'GLEC' + '-' + formTrackingDict['SEDO_DATE_SENT'];
            } else {
                tf_labSEDO.value = formTrackingDict['SEDO_LAB'] + '-' + formTrackingDict['SEDO_DATE_SENT'];
            }
            tf_commentSEDO.value = formTrackingDict['SEDO_T3_6'];
            tf_labSEDO.shipID = formTrackingDict['SEDO_SHIP_ID'];
        }       
        if (formSampleDict['BENT_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotBENT,true);
            lbl_sampleIDBENT.text = formSampleDict['BENT_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotBENT,false);
            lbl_sampleIDBENT.text = formSampleDict['BENT_SAMPLE_ID'];
            if (formTrackingDict['BENT_GLEC'] === 'Y') {
                tf_labBENT.value = 'GLEC' + '-' + formTrackingDict['BENT_DATE_SENT'];
            } else {
                tf_labBENT.value = formTrackingDict['BENT_LAB'] + '-' + formTrackingDict['BENT_DATE_SENT'];
            }
            tf_commentBENT.value = formTrackingDict['BENT_T4_1'];
            tf_labBENT.shipID = formTrackingDict['BENT_SHIP_ID'];
        }
        if (formFishEcoDict['FTIS_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotFTIS,true);
            lbl_sampleIDFTIS.text = formFishEcoDict['FTIS_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotFTIS,false);
            lbl_sampleIDFTIS.text = formFishEcoDict['FTIS_SAMPLE_ID'];
            if (formTrackingDict['FTIS_GLEC'] === 'Y') {
                tf_labFTIS.value = 'GLEC' + '-' + formTrackingDict['FTIS_DATE_SENT'];
            } else {
                tf_labFTIS.value = formTrackingDict['FTIS_LAB'] + '-' + formTrackingDict['FTIS_DATE_SENT'];
            }
            tf_commentFTIS.value = formTrackingDict['FTIS_T5_1'];
            tf_labFTIS.shipID = formTrackingDict['FTIS_SHIP_ID'];
        }
        if (formFishHumanDict['HTIS_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotHTIS,true);
            lbl_sampleIDHTIS.text = formFishHumanDict['HTIS_SAMPLE_ID'];
        } else {
            changeStateRadioButton (btn_radionotHTIS,false);
            lbl_sampleIDHTIS.text = formFishHumanDict['HTIS_SAMPLE_ID'];
            if (formTrackingDict['HTIS_MICROBAC'] === 'Y') {
                tf_labHTIS.value = 'MICROBAC' + '-' + formTrackingDict['HTIS_DATE_SENT'];
            } else {
                tf_labHTIS.value = formTrackingDict['HTIS_LAB'] + '-' + formTrackingDict['HTIS_DATE_SENT'];
            }
            tf_commentHTIS.value = formTrackingDict['HTIS_T7_1'];
            tf_labHTIS.shipID = formTrackingDict['HTIS_SHIP_ID'];
        }
        if (formSampleDict['UVID_NOT_COLLECTED'] === 'Y') {
            changeStateRadioButton (btn_radionotUVID,true);
            lbl_sampleIDUVID.text = formSampleDict['UVID_FILENAME'];
        } else {
            changeStateRadioButton (btn_radionotUVID,false);
            lbl_sampleIDUVID.text = formSampleDict['UVID_FILENAME'];
            if (formTrackingDict['UVID_MED'] === 'Y') {
                tf_labUVID.value = 'MED' + '-' + formTrackingDict['UVID_DATE_SENT'];
            } else {
                tf_labUVID.value = formTrackingDict['UVID_LAB'] + '-' + formTrackingDict['UVID_DATE_SENT'];
            }
            tf_commentUVID.value = formTrackingDict['UVID_T8_1'];
            tf_labUVID.shipID = formTrackingDict['UVID_SHIP_ID'];
        }
   });
    view.add(scrollView);
    return view;
}