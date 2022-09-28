// Java: Exception
// Javascript: Error
// const array = new Array(100000000000000000000000000000);

//Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "not Exist💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(file: string) {
  //
}

function run() {
  const fileName = "not Exist💩";

  try {
    console.log(readFile(fileName));
  } catch (e) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`finally!`);
  }
}

run();
