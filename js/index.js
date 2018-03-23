//控制div显示隐藏

function dianji(){
	
	var cs=document.getElementById('cs');
	var kh=document.getElementById('kh');
	var im=document.getElementById('im');
	var js=document.getElementById('js');
	var sy=document.getElementById('sy');
	var private=document.getElementById('private');
	var a=document.getElementById('a');
	if (kh.style.display='none') {
		cs.style.backgroundColor="#4EB1F4";
		im.style.backgroundColor='#939393';
		sy.style.backgroundColor='#939393';
		kh.style.display='block';
		js.style.display='none';
		private.style.display='none';
		a.innerHTML='免费试用';
	}

}

function dianji2(){
	var cs=document.getElementById('cs');
	var kh=document.getElementById('kh');
	var im=document.getElementById('im');
	var js=document.getElementById('js');
	var sy=document.getElementById('sy');
	var private=document.getElementById('private');
	var a=document.getElementById('a');
	if(js.style.display='none'){
		cs.style.backgroundColor='#939393';
		im.style.backgroundColor='#5CB85C';
		sy.style.backgroundColor='#939393';
		js.style.display='block';
		kh.style.display='none';
		private.style.display='none';
		a.innerHTML='免费使用';
	}
}

function dianji3(){
	var cs=document.getElementById('cs');
	var kh=document.getElementById('kh');
	var im=document.getElementById('im');
	var js=document.getElementById('js');
	var sy=document.getElementById('sy');
	var private=document.getElementById('private');
	var a=document.getElementById('a');
	if(private.style.display='none'){
		cs.style.backgroundColor='#939393';
		im.style.backgroundColor='#939393';
		sy.style.backgroundColor='#0D699B';
		js.style.display='none';
		kh.style.display='none';
		private.style.display='block';
		a.innerHTML='立即申请';
	}
}
