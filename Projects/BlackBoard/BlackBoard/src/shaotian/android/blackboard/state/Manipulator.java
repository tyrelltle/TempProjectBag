package shaotian.android.blackboard.state;

import shaotian.android.blackboard.Drawable.DrawableContextNode;
import android.app.Dialog;
import android.content.Context;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

public abstract class Manipulator {
	STATE state;
	Context appcontext;
	public DrawableContextNode context;
	
	
	public enum STATE{
		MOVE,EDIT,NONE
	}
	public Manipulator(DrawableContextNode c,Context a)
	{
		appcontext=a;
		context=c;
		state=STATE.NONE;
		
	}
	public abstract void click( MotionEvent e);//mouse click
	public abstract void move( MotionEvent e);//mouse move
	public abstract void create() throws Exception;//create mode

	class moveListener implements Button.OnTouchListener
	{
		Dialog dialog;
		Manipulator manipulator;
		public moveListener(Dialog d,Manipulator m)
		{
			this.dialog=d;
			this.manipulator=m;
		}
		public boolean onTouch(View v, MotionEvent event) {
			// TODO Auto-generated method stub
			manipulator.state=STATE.MOVE;
			dialog.dismiss();
			
			return true;
		}
		
	}
}
