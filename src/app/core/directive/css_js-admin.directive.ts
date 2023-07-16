import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[css-js-admin]'
})
export class CssJsAdminDirective {

  constructor(private el: ElementRef) {
    const dynamicStyles = [
      '../../../assets/admin-assets/assets/css/app.min.css',
      // '../../../assets/vendor/bootstrap/css/bootstrap.min.css',
      // '../../../assets/css/ruang-admin.min.css',
    ];
    for (let i = 0; i < dynamicStyles.length; i++) {
      const node = document.createElement('link');
      node.href = dynamicStyles[i];
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    const dynamicScripts = [
      '../../../assets/admin-assets/assets/js/vendors.min.js',
      '../../../assets/admin-assets/assets/vendors/chartjs/Chart.min.js',
      '../../../assets/admin-assets/assets/js/pages/dashboard-default.js',
      '../../../assets/admin-assets/assets/js/app.min.js',
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
