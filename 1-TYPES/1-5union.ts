{
  /*
   * Union Types: OR ⭐️
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 16;

  //function: login ==> success, fail
  type Result = "success" | "fail";
  //   function login(result: Result) {
  //     if (result == "success") {
  //       console.log("로그인 성공");
  //     } else {
  //       console.log("로그인 실패");
  //     }
  //   }
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state: LoginState)
  //success => 🎉
  //fail => 😭 reason

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭  ${state.reason}`);
    }
  }
}
