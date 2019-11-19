import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchh'
})
export class SearchPipe implements PipeTransform {
 

transform(heroes, searchText) {
if (searchText===undefined) {
return heroes;
    }
else {
return heroes.filter(
function (x) {
return x.name.toLowerCase().startsWith(searchText.toLowerCase());
        }
      )
    }
  }
}
