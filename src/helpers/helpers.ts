export class Helpers {
  //when we user static methods we do not have to create a instance of it.
  //only
  //Helper.firstLetterUppercase()
  //instead of
  // const helper= new Helpers()
  //helper.firstLetterUppercase()
  static getInitials(names: string[]): string {
    return names.map((name) => name[0].toUpperCase()).join("&");
  }
  static camelCase(item: string): string {
    const initial = item.slice(0, 1).toUpperCase();
    return initial + item.slice(1).split("_").join(" ");
  }
}
