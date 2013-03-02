package shaotian.android.blackboard.utility;

import shaotian.android.blackboard.command.CommandFactory;
import android.app.Dialog;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

public class ColorPanelOnTouchListener implements Button.OnTouchListener{
	int color;
	Dialog d;
	public ColorPanelOnTouchListener(int color,Dialog d)
	{
		this.d=d;
		this.color=color;
	}
	public boolean onTouch(View v, MotionEvent event) {
		// TODO Auto-generated method stub
	
		if(event.getAction()!=MotionEvent.ACTION_DOWN)
			return false;
				int pre=Pallette.Instance().color;
				CommandFactory.Instance().newColorCommand(pre, color);
				d.dismiss();
				
			
         
		return true;
	}

}
