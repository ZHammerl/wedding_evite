export class Helpers {
  //when we user static methods we do not have to create a instance of it.
  //only
  //Helper.firstLetterUppercase()
  //instead of
  // const helper= new Helpers()
  //helper.firstLetterUppercase()
  static getInitials(nameOne: string, nameTwo: string): string {
    if (!nameOne) {
      return;
    }
    return nameOne[0].toUpperCase() + "&" + nameTwo[0].toUpperCase();
  }
  static camelCase(item: string): string {
    const initial = item.slice(0, 1).toUpperCase();
    return initial + item.slice(1).split("_").join(" ");
  }
}
