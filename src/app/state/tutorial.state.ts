// Section 1
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Tutorial } from "./../models/tutorial.model";
import { AddTutorial, RemoveTutorial } from "./../actions/tutorial.actions";

// section 2
export class TutorialStateModel {
  tutorials: Tutorial[];
}

// seciton 3
@State<TutorialStateModel>({
  name: "tutorials",
  defaults: {
    tutorials: []
  }
})
export class TutorialState {
  // seciton 4
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  @Action(AddTutorial)
  add(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: AddTutorial
  ) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial)
  remove(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: RemoveTutorial
  ) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.name !== payload)
    });
  }
}
