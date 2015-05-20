
if(typeof($uifm)==='undefined'){$uifm=jQuery;}
var rocketfm;(function($,window){window.rocketfm=rocketfm=$.rocketfm||function(){var uifmvariable=[];uifmvariable.innerVars={};var validators={letters:{regex:/^[A-Za-z]+$/},numbers:{regex:/^[0-9]+$/},numletter:{regex:/^[A-Za-z0-9]+$/},postcode:{regex:/^.{3,}$/},email:{regex:/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/},phone:{regex:/^[2-9]\d{2}-\d{3}-\d{4}$/}};arguments.callee.setInnerVariable=function(name,value){uifmvariable.innerVars[name]=value;};arguments.callee.getInnerVariable=function(name){if(uifmvariable.innerVars[name]){return uifmvariable.innerVars[name];}else{return'';}};arguments.callee.dumpvar3=function(object){return JSON.stringify(object,null,2);};arguments.callee.dumpvar2=function(object){return JSON.stringify(object);};arguments.callee.dumpvar=function(object){var seen=[]
var json=JSON.stringify(object,function(key,val){if(val!=null&&typeof val=="object"){if(seen.indexOf(val)>=0)
return
seen.push(val)}
return val});return seen;};arguments.callee.showLogMessage=function(msg){console.log(msg);};arguments.callee.validate_processValidation=function(value,type_val){var isValid=false;if(value.length){switch(parseInt(type_val)){case 1:if(value.length&&validators['letters'].regex.test(value)){isValid=true;}
break;case 2:if(value.length&&validators['numletter'].regex.test(value)){isValid=true;}
break;case 3:if(value.length&&validators['numbers'].regex.test(value)){isValid=true;}
break;case 4:if(value.length&&validators['email'].regex.test(value)){isValid=true;}
break;case 5:default:if(value.length){isValid=true;}
break;}}
return isValid;};arguments.callee.validate_applyPopOverOpt=function(element){var cus_placement;switch(parseInt($(element).data('val-pos'))){case 1:cus_placement='right';break;case 2:cus_placement='bottom';break;case 3:cus_placement='left';break;case 0:default:cus_placement='top';break;}
var options={animation:false,html:true,placement:cus_placement,content:$(element).data('val-custxt')||'Ops... this is required',trigger:'manual',container:"body",template:'<div class="popover popover_'+$(element).data('idfield')+' uiform_popover_frontend uiform-wrap" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'};return options;};arguments.callee.validate_addInvalidFields=function(value){var temp;temp=this.getInnerVariable('val_invalid_fields');temp.push(value);this.setInnerVariable('val_invalid_fields',temp);};arguments.callee.validate_field=function(el){var field_id,field_type,field_value,val_type,val_custtext,val_pos,val_tip,val_tip_col,val_tip_bg,field_pop;field_id=el.attr('id');field_type=el.attr('data-typefield');val_type=el.data('val-type')||0;val_pos=el.data('val-pos');val_tip=el.data('tip_col');val_tip_col=el.data('tip_col');val_tip_bg=el.data('tip_bg');switch(parseInt(field_type)){case 6:case 7:case 28:case 29:case 30:field_value=el.find('.rockfm-txtbox-inp-val').val();field_pop=el.find('.rockfm-txtbox-inp-val');if(this.validate_processValidation(field_value,val_type)){el.removeClass('rockfm-required');field_pop.removeClass('rockfm-val-error');field_pop.popover('destroy');}else{el.addClass('rockfm-required');if(!field_pop.hasClass("rockfm-val-error")){field_pop.addClass('rockfm-val-error');}
field_pop.popover('destroy').popover(this.validate_applyPopOverOpt(el)).popover('show');}
break;case 8:case 9:case 10:case 11:case 12:case 13:case 24:case 25:case 26:switch(parseInt(field_type)){case 8:if(el.find(".rockfm-input2-wrap input[type='radio']:checked").length>0){field_value='1';}else{field_value='';}
field_pop=el.find('.rockfm-input2-wrap');break;case 9:if(el.find(".rockfm-input2-wrap input[type='checkbox']:checked").length>0){field_value='1';}else{field_value='';}
field_pop=el.find('.rockfm-input2-wrap');break;case 10:case 11:if(el.find(".rockfm-input2-wrap select option:selected").length>0){field_value='1';}else{field_value='';}
field_pop=el.find('.rockfm-input2-wrap');break;case 12:if(el.find(".rockfm-fileupload-wrap .fileinput-filename").html().length>0){field_value='1';}else{field_value='';}
field_pop=el.find('.rockfm-fileupload-wrap');break;case 13:if(el.find(".rockfm-fileupload-wrap .fileinput-preview").html().length>0){field_value='1';}else{field_value='';}
field_pop=el.find('.rockfm-fileupload-wrap .fileinput-preview');break;case 24:field_value=el.find('.rockfm-input7-datepic input').val();field_pop=el.find('.rockfm-input7-datepic');break;case 25:field_value=el.find('.rockfm-input7-timepic input').val();field_pop=el.find('.rockfm-input7-timepic');break;case 26:field_value=el.find('.rockfm-input7-datetimepic input').val();field_pop=el.find('.rockfm-input7-datetimepic');break;}
if(this.validate_processValidation(field_value,val_type)){el.removeClass('rockfm-required');field_pop.removeClass('rockfm-val-error');field_pop.popover('destroy');}else{el.addClass('rockfm-required');if(!field_pop.hasClass("rockfm-val-error")){field_pop.addClass('rockfm-val-error');}
field_pop.popover('destroy').popover(this.validate_applyPopOverOpt(el)).popover('show');}
break;case 0:break;default:}};arguments.callee.validate_enableHighlight=function(el){try{var first_el=el.find('.rockfm-required:eq(0)');var type=first_el.attr('data-typefield');var field_inp;switch(parseInt(type)){case 6:case 28:case 29:case 30:field_inp=el.find('.rockfm-txtbox-inp-val');field_inp.focus();break;case 7:field_inp=el.find('.rockfm-txtbox-inp-val');field_inp.focus();break;case 8:case 9:case 10:case 11:field_inp=el.find('.rockfm-input2-wrap');break;case 12:field_inp=el.find('.rockfm-fileupload-wrap');break;case 13:field_inp=el.find('.rockfm-fileupload-wrap');break;case 24:field_inp=el.find('.rockfm-input7-datepic');break;case 25:field_inp=el.find('.rockfm-input7-timepic');break;case 26:field_inp=el.find('.rockfm-input7-datetimepic');break;case 0:break;default:}
$('html,body').animate({scrollTop:field_inp.offset().top-40},'slow');}
catch(ex){console.error("validate_enableHighlight : ",ex.message);}};arguments.callee.validate_form=function(el_form){var el,valid;el_form.find('.rockfm-required').on("click change keyup focus keypress",function(){rocketfm.validate_field($(this));});el_form.find('.rockfm-required').each(function(index,element){rocketfm.validate_field($(element));});if(parseInt(el_form.find('.rockfm-required').length)>0){valid=false;this.validate_enableHighlight(el_form);}else{valid=true;}
return{isValid:valid,error:''}};arguments.callee.submitForm=function(element){var el_form=$(element).closest('.rockfm-form');this.setInnerVariable('val_curform_obj',el_form);var res_val=this.validate_form(el_form);if(res_val.isValid){if(el_form.find('.g-recaptcha').length){this.recaptcha_validate();}else if(el_form.find('.rockfm-inp6-captcha').length){this.captcha_validate();}else{rocketfm.submitForm_submit(el_form);}}};arguments.callee.submitForm_showMessage=function(el,response,obj_btn){var msg_error='<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> Error! Form was not submiteed.</div>';obj_btn.removeAttr("disabled").html(obj_btn.attr('data-val-btn'));var msg='';if(response){var arrJson=JSON&&JSON.parse(response)||$.parseJSON(response);if(parseInt(arrJson.success)===1){msg=decodeURIComponent(arrJson.show_message);}else{msg=msg_error;}}else{msg=msg_error;}
if(msg){var tmp_msg=el.parent().find(".rockfm-alert-container");tmp_msg.html('');tmp_msg.append('<div class="rockfm-alert-inner" >'+msg+'</div>');tmp_msg.show();el.hide();$('html,body').animate({scrollTop:tmp_msg.offset().top},'slow');}};arguments.callee.submitForm_submit=function(el){if(el.find('._rockfm_type_submit')&&parseInt(el.find('._rockfm_type_submit').val())===1){var obj_btn=el.find('.rockfm-submitbtn .rockfm-txtbox-inp-val');if(el.find('.rockfm-fileupload-wrap').length){var options={url:rockfm_vars.ajaxurl,beforeSend:function()
{},type:'POST',beforeSubmit:function(formData,formObject,formOptions){},beforeSerialize:function(form,options){el.find('.uifm-conditional-hidden',form).remove();obj_btn.attr('disabled','disabled').html(obj_btn.attr('data-val-subm')+' <img src="'+rockfm_vars.imagesurl+'/ajax-loader-white.gif">');},uploadProgress:function(event,position,total,percentComplete)
{},success:function()
{},complete:function(response)
{obj_btn.removeAttr('disabled');rocketfm.submitForm_showMessage(el,response.responseText,obj_btn);},error:function()
{console.log('errors');}};el.ajaxForm(options);el.submit();}else{var data=el.uifm_serialize();$.ajax({type:"post",url:rockfm_vars.ajaxurl,data:data,async:true,dataType:"html",beforeSend:function(){obj_btn.attr('disabled','disabled').html(obj_btn.attr('data-val-subm')+' <img src="'+rockfm_vars.imagesurl+'/ajax-loader-white.gif">');},success:function(response){obj_btn.removeAttr('disabled');rocketfm.submitForm_showMessage(el,response,obj_btn);}});}}else{el.find('.rockfm-conditional-hidden').remove();el.submit();}};arguments.callee.captcha_validate=function(){var el_form=this.getInnerVariable('val_curform_obj');var captcha_obj=$(el_form).find('.rockfm-inp6-captcha');var el_field=captcha_obj.closest('.rockfm-field');$.ajax({type:'POST',url:rockfm_vars.ajaxurl,dataType:"json",data:{'action':'rocket_front_valcaptcha','rockfm-code':el_field.find('.rockfm-inp6-captcha-code').val(),'rockfm-inpcode':el_field.find('.rockfm-inp6-captcha-inputcode').val()},success:function(response){try{if(typeof response=='object')
{if(response.success===true){rocketfm.captcha_response(true);}else{rocketfm.captcha_response(false);}}else{rocketfm.captcha_response(false);}}
catch(ex){rocketfm.captcha_response(false);}}});};arguments.callee.captcha_response=function(success){var temp=this.getInnerVariable('val_curform_obj');if(success===true){rocketfm.submitForm_submit(temp);}else{var tmp_captcha=$(temp).find('.rockfm-inp6-captcha-inputcode');var hidePopover=function(){tmp_captcha.popover('hide');};tmp_captcha.popover('destroy').popover(rocketfm.validate_applyPopOverOpt(tmp_captcha)).focus(hidePopover).popover('show');$('html,body').animate({scrollTop:tmp_captcha.offset().top-40},'slow');}};arguments.callee.recaptcha_validate=function(){var form_obj=this.getInnerVariable('val_curform_obj');var field_id=form_obj.find('.g-recaptcha').closest('.rockfm-recaptcha').attr('data-idfield');$.ajax({type:'POST',url:rockfm_vars.ajaxurl,dataType:"json",data:{'action':'rocket_front_checkrecaptcha','rockfm-uid-field':field_id,'rockfm-code-recaptcha':$('#g-recaptcha-response').val(),'form_id':form_obj.find('._rockfm_form_id').val()},success:function(response){try{if(typeof response=='object')
{if(response.success===true){rocketfm.recaptcha_response(true);}else{rocketfm.recaptcha_response(false);}}else{rocketfm.recaptcha_response(false);}}
catch(ex){rocketfm.recaptcha_response(false);}},error:function(jqXHR,textStatus,errorThrown){rocketfm.recaptcha_response(false);}});};arguments.callee.captcha_refreshImage=function(element){var el=$(element);var el_data=el.data('rkver');var el_url=el.data('rkurl');var obj_field=el.closest('.rockfm-field');$.ajax({type:'POST',url:rockfm_vars.ajaxurl,dataType:"json",data:{'action':'rocket_front_refreshcaptcha','rkver':el_data},success:function(response){obj_field.find('.rockfm-inp6-captcha-img').attr('src',el_url+response.rkver);el.attr('data-rkver',response.rkver);obj_field.find('.rockfm-inp6-captcha-code').val(response.code);}});};arguments.callee.recaptcha_response=function(success){var temp=this.getInnerVariable('val_curform_obj');if(success===true){rocketfm.submitForm_submit(temp);}else{var tmp_captcha=$(temp).find('.rockfm-input5-wrap');var hidePopover=function(){tmp_captcha.popover('hide');};tmp_captcha.popover('destroy').popover(rocketfm.validate_applyPopOverOpt(tmp_captcha)).focus(hidePopover).popover('show');$('html,body').animate({scrollTop:tmp_captcha.offset().top-40},'slow');}};arguments.callee.loadform_init=function(){var obj_form_list=$('.rockfm-form-container');var obj_form;obj_form_list.each(function(i){obj_form=$(this).find('.rockfm-form');if(!obj_form.hasClass('rockfm-form-mloaded')){obj_form.addClass('rockfm-form-mloaded');if(obj_form.find('.rockfm-input4-slider').length){obj_form.find('.rockfm-input4-slider').slider();obj_form.find('.rockfm-input4-slider').on("slide",function(slideEvt){$(this).parent().parent().find('.rockfm-input4-number').text(slideEvt.value);});}
if(obj_form.find('.rockfm-input4-spinner').length){var spinners=obj_form.find('.rockfm-input4-spinner'),s_min,s_max,s_step,s_value;spinners.each(function(i){s_min=$(this).attr('data-rockfm-min'),s_max=$(this).attr('data-rockfm-max'),s_step=$(this).attr('data-rockfm-step'),s_value=$(this).attr('data-rockfm-value');$(this).TouchSpin({verticalbuttons:true,min:parseFloat(s_min),max:parseFloat(s_max),stepinterval:parseFloat(s_step),verticalupclass:'glyphicon glyphicon-plus',verticaldownclass:'glyphicon glyphicon-minus',initval:parseFloat(s_value)});});}
if(obj_form.find('.g-recaptcha').length){var rockfm_recaptcha=document.createElement('script');rockfm_recaptcha.type='text/javascript';rockfm_recaptcha.async=true;rockfm_recaptcha.defer='defer';rockfm_recaptcha.src='https://www.google.com/recaptcha/api.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(rockfm_recaptcha,s);if(parseInt(obj_form.find('.g-recaptcha').length)>1){var rockfm_rcha_d=obj_form.find('.g-recaptcha');rockfm_rcha_d.each(function(i){if(parseInt(i)!=0){$(this).removeClass('g-recaptcha').html('ReCaptcha is loaded once. Remove this field');}});}}
if(obj_form.find('.rockfm-captcha').length){if(parseInt(obj_form.find('.rockfm-captcha').length)>1){var rockfm_capcha_d=obj_form.find('.rockfm-captcha');rockfm_capcha_d.each(function(i){if(parseInt(i)!=0){$(this).find('.rockfm-inp6-captcha').removeClass('rockfm-inp6-captcha').html('Captcha is loaded once. Remove this field');}});}
var rockfm_capcha_refobj=obj_form.find('.rockfm-captcha .rockfm-inp6-wrap-refrescaptcha a');rocketfm.captcha_refreshImage(rockfm_capcha_refobj);}
if(obj_form.find('.rockfm-input7-datepic').length){var rockfm_datepic_d=obj_form.find('.rockfm-input7-datepic');var rkfm_datepic_tmp1,rkfm_datepic_tmp2;rockfm_datepic_d.each(function(i){$(this).datetimepicker({format:'L'});rkfm_datepic_tmp1=$(this).attr('data-rkfm-language');if(rkfm_datepic_tmp1){$(this).data('DateTimePicker').locale(rkfm_datepic_tmp1);}
rkfm_datepic_tmp2=$(this).attr('data-rkfm-showformat');if(rkfm_datepic_tmp2){$(this).data('DateTimePicker').dayViewHeaderFormat(rkfm_datepic_tmp2);}});}
if(obj_form.find('.rockfm-input7-timepic').length){var rockfm_timepic_d=obj_form.find('.rockfm-input7-timepic');rockfm_timepic_d.each(function(i){$(this).datetimepicker({format:'LT'});});}
if(obj_form.find('.rockfm-input7-datetimepic').length){var rockfm_datetm_d=obj_form.find('.rockfm-input7-datetimepic');var rkfm_datetm_tmp1,rkfm_datetm_tmp2;rockfm_datetm_d.each(function(i){$(this).datetimepicker();rkfm_datetm_tmp1=$(this).attr('data-rkfm-language');if(rkfm_datetm_tmp1){$(this).data('DateTimePicker').locale(rkfm_datetm_tmp1);}
rkfm_datetm_tmp2=$(this).attr('data-rkfm-showformat');if(rkfm_datetm_tmp2){$(this).data('DateTimePicker').dayViewHeaderFormat(rkfm_datetm_tmp2);}});obj_form.find('.rockfm-input7-datetimepic').datetimepicker();}
if(obj_form.find('.rockfm-input-ratingstar').length){var rockfm_rstar_d=obj_form.find('.rockfm-input-ratingstar');rockfm_rstar_d.each(function(i){$(this).rating({starCaptions:{1:$(this).attr('data-uifm-txt-star1')||'very bad',2:$(this).attr('data-uifm-txt-star2')||'bad',3:$(this).attr('data-uifm-txt-star3')||'ok',4:$(this).attr('data-uifm-txt-star4')||'good',5:$(this).attr('data-uifm-txt-star5')}||'very good',clearCaption:$(this).attr('data-uifm-txt-norate'),starCaptionClasses:{1:"text-danger",2:"text-warning",3:"text-info",4:"text-primary",5:"text-success"}});});}
if(obj_form.find('.rockfm-colorpicker-wrap').length){var rockfm_cpicker_d=obj_form.find('.rockfm-colorpicker-wrap');rockfm_cpicker_d.each(function(i){$(this).colorpicker();});}
if(obj_form.find('[data-rockfm-gfont]').length){var rockfm_tmp=obj_form.find('[data-rockfm-gfont]');var rockfm_uniq_font=[];rockfm_tmp.each(function(i){if($.inArray($(this).attr('data-rockfm-gfont'),rockfm_uniq_font)===-1){var atImport='@import url(//fonts.googleapis.com/css?family='+$(this).attr('data-rockfm-gfont');$('<style>').append(atImport).appendTo('head');rockfm_uniq_font.push($(this).attr('data-rockfm-gfont'));}});}
if(obj_form.find('.rockfm-clogic-fcond').length){$['uiform_logical'].setData(obj_form.find('.rockfm_clogic_data').val());$['uiform_logical'].refreshfields();}
$('.uiform-main-form [data-toggle="tooltip"]').tooltip({'selector':'','placement':'top','container':'.rockfm-label-helpblock',html:true});}});};arguments.callee.wizard_nextButton=function(el){var el_form=$(el).closest('.rockfm-form');this.setInnerVariable('val_curform_obj',el_form);var objform=$(el).closest('.rockfm-form');var objtabs=objform.find('.uiform-steps li');var tabs_num=objtabs.length;var tab_cur_index=objform.find('.uiform-steps li.uifm-current').index();var tab_next_obj=objform.find('.uiform-steps li.uifm-current').next();var tab_next_index=tab_next_obj.index();var gotab_next;var gotab_next_cont;var gotab_cur;var gotab_cur_cont;gotab_cur=objtabs.eq(tab_cur_index);gotab_cur_cont=$(gotab_cur).find("a").attr("href");var obj_cur_form=$(gotab_cur_cont);var res_val=this.validate_form(obj_cur_form);if(res_val.isValid){if(obj_cur_form.find('.g-recaptcha').length){this.recaptcha_validate();}else if(obj_cur_form.find('.rockfm-inp6-captcha').length){this.captcha_validate();}else{gotab_cur.removeClass('uifm-current').addClass('uifm-complete');$(gotab_cur_cont).hide();gotab_next=objtabs.eq(tab_next_index);gotab_next.removeClass('uifm-disabled').addClass('uifm-current');gotab_next_cont=$(gotab_next).find("a").attr("href");$(gotab_next_cont).show();if(parseFloat(tab_cur_index)<parseFloat(tab_next_index)){var tab_next2_obj_index=tab_next_obj.next().index();$('.rockfm-btn-wizprev').removeAttr('disabled');if(parseFloat(tab_next2_obj_index)>0&&parseFloat(tab_next2_obj_index)>parseFloat(tab_next_index)){}else{var wiznext_lasttxt=$(el).attr('data-value-last')||'finish';$('.rockfm-btn-wiznext').find('.rockfm-inp-lbl').html(wiznext_lasttxt);}}else{var obj_btn=el_form.find('.rockfm-btn-wiznext');obj_btn.html(obj_btn.html()+' <img src="'+rockfm_vars.imagesurl+'/ajax-loader-white.gif">');rocketfm.submitForm_submit(el_form);}}}else{}};arguments.callee.wizard_prevButton=function(el){var objform=$(el).closest('.rockfm-form');var objtabs=objform.find('.uiform-steps li');var tabs_num=objtabs.length;var tab_cur_index=objform.find('.uiform-steps li.uifm-current').index();var tab_next_obj=objform.find('.uiform-steps li.uifm-current').prev();var tab_next_index=tab_next_obj.index();var gotab_next;var gotab_next_cont;var gotab_cur;var gotab_cur_cont;if(tab_next_obj){gotab_cur=objtabs.eq(tab_cur_index);gotab_cur.removeClass('uifm-current').removeClass('uifm-complete').addClass('uifm-disabled');gotab_cur_cont=$(gotab_cur).find("a").attr("href");$(gotab_cur_cont).hide();gotab_next=objtabs.eq(tab_next_index);gotab_next.removeClass('uifm-disabled').removeClass('uifm-complete').addClass('uifm-current');gotab_next_cont=$(gotab_next).find("a").attr("href");$(gotab_next_cont).show();}
if(parseFloat(tab_cur_index)>parseFloat(tab_next_index)){var tab_prev2_obj_index=tab_next_obj.prev().index();if(parseFloat(tab_prev2_obj_index)>=0&&parseFloat(tab_prev2_obj_index)<parseFloat(tab_next_index)){}else{var wiznext_ntxt=$(el).attr('data-value-next')||'next';$('.rockfm-btn-wiznext .rockfm-inp-lbl').html(wiznext_ntxt);$('.rockfm-btn-wizprev').attr('disabled','disabled');}}};};})($uifm,window);$uifm(document).ready(function($){var
rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;var rcheckableType=(/^(?:checkbox|radio)$/i);$.fn.extend({uifm_serialize:function(){return $.param(this.uifm_serializeArray());},uifm_serializeArray:function(){return this.map(function(){var elements=$.prop(this,"elements");var exclude_array=[];var exclude_fields=$(elements).find('.uifm-conditional-hidden').find(':input');exclude_array=$.map(exclude_fields,function(n,i){return $(n).attr('name');});var new_elements=[];$.each(elements,function(i,val){if(parseInt($.inArray($(val).attr('name'),exclude_array))<0){new_elements.push(val);}});return new_elements?$.makeArray(new_elements):this;}).filter(function(){var type=this.type;return this.name&&!$(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=$(this).val();return val==null?null:$.isArray(val)?$.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});rocketfm();rocketfm.loadform_init();});