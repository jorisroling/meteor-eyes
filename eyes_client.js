Eyes=EyesBase.inspector({maxLength:-1,functions:false,html:true});
var counter=0;

Template.registerHelper('eyes', function(obj) {
	counter++;
	return '<i class="fa fa-eye" onClick="$(\'#eyes_'+counter+'\').toggle()"></i><span id="eyes_'+counter+'" style="display:none">'+Eyes(obj)+'</span>';
});

