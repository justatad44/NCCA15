
Ti.App.gl_version = '1.00';


function setMasterView(labelArray,viewArray){
    //loop through arrays and make table view
    var data = [];
    for (var i = 0; i < labelArray.length; i++) {

        var newRow = Ti.UI.createTableViewRow({
            hasChild:false,
            hasCheck:false,
            height:60,
            backgroundColor:'#006699',
            color:'white',
            title:labelArray[i],
            viewValue:viewArray[i],
            rowValue:labelArray[i],
        });
        data[i] = newRow;
    }


    var tableview = Titanium.UI.createTableView({
        data:data,
        backgroundColor:'#006699',
        separatorColor:'black',
    });
    
    return tableview;
}

function setTableView(labelArray,viewArray){
    //loop through arrays and make table view
    var data = [];
    for (var i = 0; i < labelArray.length; i++) {

        var newRow = Ti.UI.createTableViewRow({
            hasChild:true,
            hasCheck:false,
            height:60,
            color:'black',
            title:labelArray[i],
            viewValue:viewArray[i],
            rowValue:labelArray[i],
        });
        data[i] = newRow;
    }


    var tableview = Titanium.UI.createTableView({
        data:data,
    });
    return tableview;
}

function updateSelectTableView(selectArray,selectTableView){
    //loop through arrays and make table view
    var data = [];
    for (var i = 0; i < selectArray.length; i++) {
        var newRow = Ti.UI.createTableViewRow({
            hasChild:true,
            hasCheck:false,
            height:60,
            color:'black',
            title:selectArray[i],
            rowValue:selectArray[i],
        });
        data[i] = newRow;
    }
    selectTableView.setData(data);
    return selectTableView;
}

function setFormView(){
    var view = Ti.UI.createView({
        top:10,
        left:10,
        //width:Ti.Platform.displayCaps.platformWidth - 20,
        width:690,
        //width:Ti.Platform.displayCaps.platformHeight - 20,
        height:915,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'white',
        viewShadowColor:'black',
        viewShadowOffset:{x:-5,y:-5},
        viewShadowRadius:5,
        viewShadowOpacity:1,
    });
    
    return view;
}

function setScrollView(){
    var scrollView = Ti.UI.createScrollView({
        contentWidth:'auto',
        contentHeight:'auto',
        top:0,
        horizontalBounce:false,
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:true
    });
    return scrollView;
}

function setUpdateView(){
    var view = Ti.UI.createView({
        top:0,
        left:0,
        width:690,
        height:90,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:5,
        //backgroundColor:'gray',
        backgroundColor:'#006699',
        zIndex:1,
    });
    
    return view;
}

function setFormatView(top,left,width,height){
    var view = Ti.UI.createView({
        top:top,
        left:left,
        width:width,
        height:height,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:2,
        backgroundColor:'E8E8E8',
    });
    return view;
}

function setMenuWindow(){
    var win = Titanium.UI.createWindow({  
        fullscreen:false,
        top:90,
        left:59,
        width:300,
    });

    return win; 
}

function setPopupWindow(){
    var win = Titanium.UI.createWindow({  
        fullscreen:true,
        backgroundColor:'white',
    });

    return win; 
}

function setMenuButton(topVal,leftVal,status){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        height:47,
        width:48,
        open:status,
    });

    if (status===true) {
        button.backgroundImage = 'ui/images/menu_arrow_left.png';
    } else {
        button.backgroundImage = 'ui/images/menu_arrow_right.png';
    }
    
    return button;
}

function setAddSiteButton(topVal,leftVal,status){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        height:47,
        width:48,
        open:status,
    });

    if (status===true) {
        button.backgroundImage = 'ui/images/addSite_button.png';
    } else {
        button.backgroundImage = 'ui/images/addSite_button.png';
    }
    
    return button;
}

function setSubmitButton(topVal,leftVal,status){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        height:47,
        width:48,
        open:status,
    });

    if (status===true) {
        button.backgroundImage = 'ui/images/submit.png';
    } else {
        button.backgroundImage = 'ui/images/submit.png';
    }
    
    return button;
}

function setLabel(labelText,topVal,leftVal,widthVal){
    var label = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'black',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:labelText,
    });
    return label;
}
function setLabelI(labelText,topVal,leftVal,widthVal){
    var label = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'#006699',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:labelText,
    });
    return label;
}
function setSmallLabel(labelText,topVal,leftVal,widthVal){
    var label = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'white',
        font:{fontSize:18,fontWeight:'bold',fontFamily:'Avenir'},
        text:labelText,
    });
    return label;
}

function setBlueLabel(labelText,topVal,leftVal,widthVal){
    var label = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'blue',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:labelText,
    });
    return label;
}

function setRedLabel(labelText,topVal,leftVal,widthVal){
    var label = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'red',
        font:{fontSize:24,fontWeight:'bold'},
        text:labelText,
    });
    return label;
}
       
function setVLabel(labelText,topVal,leftVal,heightVal,widthVal){
    var tr = Ti.UI.create2DMatrix();
     tr = tr.rotate(305);
         var label = Ti.UI.createLabel({
                left:leftVal,
                top:topVal,
                width:widthVal,
                height:heightVal,
                color:Ti.App.gl_fontColor,
                 font:{fontSize:18,fontWeight:'bold'},
                textAlign: 'right',
                 text:labelText,
                transform : tr
         });
         return label;
}
 
function setUpdateLabel(){
    var header = Ti.UI.createLabel({
        left:60,
        top:18,
        height:50,
        color:'white',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:'UPDATE DATABASE:',
    });
    //header.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    return header;
}

function setHeader(headerText,topVal){
    var header = Ti.UI.createLabel({
        left:0,
        top:topVal,
        width:690,
        height:50,
        color:'white',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:headerText,
        backgroundColor:'gray',
    });
    header.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
    return header;
}
function setTitle(titleText,topVal,leftVal,widthVal){
    var title = Ti.UI.createLabel({
        left:leftVal,
        top:topVal,
        width:widthVal,
        height:'auto',
        color:'blue',
        font:{fontSize:30,fontWeight:'bold'},
        text:titleText,
    });
    return title;
}

function setTextField(textString,topVal,leftVal,wideVal){
    var tf = Ti.UI.createTextField({
        height:50,
        top:topVal,
        left:leftVal,
        width:wideVal,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        color:'black',
        backgroundColor:'white',
        font:{fontSize:18},
        hintText:'Enter data',
        value:textString
    });
    return tf;
}

function setTextFieldNumber(textString,topVal,leftVal,wideVal,hintText){
    var tf = Ti.UI.createTextField({
        height:50,
        top:topVal,
        left:leftVal,
        width:wideVal,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        color:'black',
        backgroundColor:'white',
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        font:{fontSize:18},
        hintText:hintText,
        value:textString
    });
    return tf;
}

function setTextFieldHint(textString,topVal,leftVal,wideVal,hintText){
    var tf = Ti.UI.createTextField({
        height:50,
        top:topVal,
        left:leftVal,
        width:wideVal,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        color:'black',
        backgroundColor:'white',
        font:{fontSize:18},
        hintText:hintText,
        value:textString
    });
    return tf;
}

function setTextArea(textString,topVal,leftVal,wideVal,heightVal){
    var ta = Ti.UI.createTextArea({
        height:heightVal,
        width:wideVal,
        left:leftVal,
        top:topVal,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        color:'black',
        backgroundColor:'white',
        font:{fontSize:18},
        textAlign:'left',
        suppressReturn:false,
        value:textString
    });
    return ta;
}

function setDropdownButton(topVal,leftVal){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        height:47,
        width:48,
        backgroundImage:'ui/images/dropdown_arrow.png'
    });
    return button;
}

function setSelectTableView(selectArray){
    //loop through arrays and make table view
    var data = [];
    for (var i = 0; i < selectArray.length; i++) {
        var newRow = Ti.UI.createTableViewRow({
            hasChild:true,
            hasCheck:false,
            height:60,
            color:'black',
            title:selectArray[i],
            rowValue:selectArray[i],
        });

        data[i] = newRow;
    }

    var tableview = Titanium.UI.createTableView({
        data:data,
    });

    return tableview;
}

function setSelectTableView2(selectArray){
    //loop through arrays and make table view
    var data = [];
    var dataInt = 0;
    for (var i = 0; i < selectArray.length; i+=2) {
        var newRow = Ti.UI.createTableViewRow({
            hasChild:true,
            hasCheck:false,
            height:60,
            color:'black',
            title:selectArray[i + 1],
            rowValue:selectArray[i],
        });

        data[dataInt] = newRow;
        dataInt = dataInt + 1;
    }

    var tableview = Titanium.UI.createTableView({
        data:data,
    });

    return tableview;
}

function setBlueButton(titleVal,topVal,leftVal,wideVal,heightVal){
    var button = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'blue',
        height:heightVal,
        width:wideVal,
        title:titleVal,
        top:topVal,
        left:leftVal,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:24,fontWeight:'bold'},
    });
    return button;
}
function setupDateButton(titleVal,topVal,leftVal,wideVal,heightVal){
    var button = Ti.UI.createButton({
        style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
        color:'red',
        height:heightVal,
        width:wideVal,
        title:titleVal,
        top:topVal,
        left:leftVal,
        borderColor:'black',
        borderWidth:'1',
        borderRadius:5,
        backgroundColor:'white',
        font:{fontSize:24,fontWeight:'bold'},
    });
    button.addEventListener('click',function(e)
    {
		alert ("You updated the database for this form");
	});
    return button;
}
//Radio Button Functions
function setRadioButton(topVal,leftVal,state){
	var imagePath = '';
	if (state == true) {
		imagePath = 'ui/images/radio_button_small_on.png';
	} else {
		imagePath = 'ui/images/radio_button_small_off.png';
	}
	var button = Ti.UI.createButton({
		top:topVal,
		left:leftVal,
		height:48,
		width:48,
		backgroundImage:imagePath,
		state:state,
	});
	return button;
}

function changeStateRadioButton (button,state){
	if (state == true) {
		button.backgroundImage = 'ui/images/radio_button_small_on.png';
		button.state = true;
	} else {
		button.backgroundImage = 'ui/images/radio_button_small_off.png';
		button.state = false;
	}
}

function  threeButton (lblText,top) {
    var lbl = setLabel (lblText, top, 10, 153);
    var btnLow = new setRadioButton((top - 7),183,false);
    var btnMod = new setRadioButton((top - 7),355,false);
    var btnHeavy = new setRadioButton((top - 7),527,false);
    var btnArray = [btnLow,btnMod,btnHeavy];
      
    btnLow.addEventListener('click',function() {
        if (btnLow.state !==true) {
            changeBtnArray (btnArray, btnLow); 
        } else {
            switchRadioButton (btnLow);
        }  
    });
    btnMod.addEventListener('click',function() {
        if (btnMod.state !==true) {
            changeBtnArray (btnArray, btnMod); 
        } else {
            switchRadioButton (btnMod);
        }  
    });
    btnHeavy.addEventListener('click',function() {
        if (btnHeavy.state !==true) {
            changeBtnArray (btnArray, btnHeavy); 
        } else {
            switchRadioButton (btnHeavy);
        }  
    });
    threeButtonArray = [lbl,btnLow,btnMod,btnHeavy];
    return threeButtonArray;
}

function changeBtnArray (btnArray, changeBtn){
	for (var i = 0; i < btnArray.length; i++) {
		if  (btnArray[i] == changeBtn) {
		changeBtn.backgroundImage = 'ui/images/radio_button_small_on.png';
		changeBtn.state = true;
	} else {
		btnArray[i].backgroundImage = 'ui/images/radio_button_small_off.png';
		btnArray[i].state = false;
		}
  }
}		

function switchRadioButton(button){
	if (button.state == true) {
		button.backgroundImage = 'ui/images/radio_button_small_off.png';
		button.state = false;
	} else {
		button.backgroundImage = 'ui/images/radio_button_small_on.png';
		button.state = true;
	}
}


function setValueRadioButton(button){
	var valString = 'N';
	if (button.backgroundImage == 'ui/images/radio_button_small_on.png') {
		valString = 'Y';
	}
	return valString;
}

function setLeftButton(topVal,leftVal){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        //height:45,
        //width:45,
        backgroundImage:'ui/images/left_arrow.png',
    });
    return button;
}

function setRightButton(topVal,leftVal){
    var button = Ti.UI.createButton({
        top:topVal,
        left:leftVal,
        //height:45,
        //width:45,
        backgroundImage:'ui/images/right_arrow.png',
    });
    return button;
}

function setSpacer(topVal,leftVal,widthVal){
    var label = Ti.UI.createView({
        top:topVal,
        left:leftVal,
        width:widthVal,
        height:2,
        backgroundColor:'blue',
    });
    return label;
}
function newTops (top,space){
	var top;
	top = top + space;
	return top;	
};
function entryMask(textValue,textCase){
    var v = textValue;
    switch(textCase) {
        case 'postcode':
            v = v.replace(/D/g,"");
            v = v.replace(/^(\d{5})(\d)/,"$1-$2");
            return v.slice(0, 10);
            break;
        case 'phone':
            v = v.replace(/\D/g,"");
            v = v.replace(/^(\d\d\d)(\d)/g,"($1) $2");
            v = v.replace(/(\d{3})(\d)/,"$1-$2");
            return v.slice(0, 14);
            break;
        case 'tens':
            v = v.replace(/\D/g,"");
            v = v.slice(0,3);
            v = v.replace(/^(\d{0,2})(\d{1})$/,"$1.$2");
            return v;
            break;
        case 'huns':
            v = v.replace(/\D/g,"");
            v = v.slice(0,4);
            v = v.replace(/^(\d{0,2})(\d{2})$/,"$1.$2");
            return v;
            break;
        case 'huns2':
            v = v.replace(/\D/g,"");
            v = v.slice(0,4);
            v = v.replace(/^(\d{0,3})(\d{1})$/,"$1.$2");
            return v;
            break;
        case 'xxDOTxx':
            v = v.replace(/\D/g,"");
            v = v.slice(0,4);
            v = v.replace(/^(\d{0,4})(\d{2,2})$/,"$1.$2");
            return v;
            break;              
        case 'thous':
            v = v.replace(/\D/g,"");
            v = v.slice(0,5);
            v = v.replace(/^(\d{0,4})(\d{1,2})$/,"$1.$2");
            return v;
            break;
        case 'lat':
            v = v.replace(/\D/g,"");
            v = v.slice(0, 6);
            v = v.replace(/^(\d{2})(\d{4})$/,"$1.$2");
            return v;
            break;
        case 'lon':
            v = v.replace(/\D/g,"");
            v = v.slice(0, 7);
            v = v.replace(/^(\d{2,3})(\d{4})$/,"-$1.$2");
            return v;
            break;
        case 'time':
            v = v.replace(/\D/g,"");
            v = v.slice(0,4);
            v = v.replace(/^(\d{1,2})(\d{2})$/,"$1:$2");
            return v;
            break;
        case 'date':
            v = v.replace(/\D/g,"");
            v = v.slice(0,8);
            v = v.replace(/^(\d\d)(\d)/g,"$1/$2");
            v = v.replace(/(\d{2})(\d)/,"$1/$2");
            return v;
            break;
        case 'three':
            v = v.replace(/\D/g,"");
            v = v.slice(0,3);
            v = v.replace(/^(\d\d\d)/g,"$1");
            return v;
            break;
        case 'four':
            v = v.replace(/\D/g,"");
            v = v.slice(0,4);
            v = v.replace(/^(\d\d\d\d)/g,"$1");
            return v;
            break;
        case 'five':
            v = v.replace(/\D/g,"");
            v = v.slice(0,5);
            v = v.replace(/^(\d\d\d\d\d)/g,"$1");
            return v;
            break;
    }
}

function setMetaView (lblText){
    var metaView = Ti.UI.createView({
        top:300,
        left:1,
        width:500,
        height:200,
        backgroundColor:'gray',
        borderRadius:8,
        borderColor:'red',
        borderWidth:3,
        zIndex:1
    });
    var scrollView = Ti.UI.createScrollView({
        top:0,
        horizontalBounce:false,
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:true
    });    
    var lbl_metaView = Ti.UI.createLabel({
        left:30,
        top:30,
        width:440,
        height:'auto',
        color:'white',
        font:{fontSize:24,fontWeight:'bold',fontFamily:'Avenir'},
        text:lblText,
    });
    scrollView.add(lbl_metaView);
    
    var closebtn = setBlueButton('X',10,450,25,25);
    scrollView.add(closebtn);
    closebtn.addEventListener('click',function(){
        metaView.hide();
    });
    metaView.add(scrollView);
    return metaView;
   
}
