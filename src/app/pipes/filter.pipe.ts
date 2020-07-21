import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const recurso of value){
      if(recurso.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(recurso);
      }
    }
    return resultPosts;
  }

}
