package shaotian.android.blackboard.controller;

import android.content.Context;
import android.view.MotionEvent;
import shaotian.android.blackboard.View.View;
import shaotian.android.blackboard.Drawable.DrawableStore;
import shaotian.android.blackboard.Model.Model;

public abstract class Controller {
	public static Controller controller;
	public Model model;
	public View view;
	public Context appcontext;

	public Controller (Model m, View v, Context c)
	{
		model=m;
		view=v;
		appcontext=c;

	}
	

	public abstract boolean actionPerformed(Object value) throws Exception;
}
