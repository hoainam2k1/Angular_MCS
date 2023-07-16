import { Directive,ElementRef} from '@angular/core'
@Directive({
  selector: '[css-js-user]'
})
export class CssJsUserDirective {

  constructor(private el: ElementRef) {
    const dynamicStyles = [
      '../../../assets/css/animate.css',
      '../../../assets/css/font-awesome.min.css',
      '../../../assets/css/bootstrap.min.css',
      '../../../assets/css/owl.carousel.min.css',
      '../../../assets/css/chosen.min.css',
      '../../../assets/css/style.css',
      '../../../assets/css/color-01.css',
    ];

    for (let i = 0; i < dynamicStyles.length; i++) {
      const node = document.createElement('link');
      node.href = dynamicStyles[i];
      node.rel = 'stylesheet';
      this.el.nativeElement.appendChild(node);
    }
    const dynamicScripts = [
      '../../../assets/js/jquery-1.12.4.minb8ff.js?ver=1.12.4',
      '../../../assets/js/jquery-ui-1.12.4.minb8ff.js?ver=1.12.4',
      '../../../assets/js/bootstrap.min.js',
      '../../../assets/js/jquery.flexslider.js',
      '../../../assets/js/chosen.jquery.min.js',
      '../../../assets/js/owl.carousel.min.js',
      '../../../assets/js/jquery.countdown.min.js',
      '../../../assets/js/jquery.sticky.js',
      '../../../assets/js/functions.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
