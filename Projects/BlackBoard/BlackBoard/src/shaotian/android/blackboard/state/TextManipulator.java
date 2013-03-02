package shaotian.android.blackboard.state;

import shaotian.android.blackboard.R;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.state.Manipulator.STATE;
import shaotian.android.blackboard.utility.ColorPanelOnTouchListener;
import shaotian.android.blackboard.utility.ImageAdapter;
import shaotian.android.blackboard.utility.Pallette;
import shaotian.android.blackboard.utility.SupportColors;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.GridView;
import android.widget.LinearLayout;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.AdapterView.OnItemClickListener;

public class TextManipulator extends Manipulator{



	public TextManipulator(DrawableContextNode c, Context a) {
		super(c, a);
		// TODO Auto-generated constructor stub
	}

	@Override
	public
	void click(MotionEvent event) {
		// TODO Auto-generated method stub
		
		
	}

	
	
	@Override
	public
	void move(MotionEvent event) {
		// TODO Auto-generated method stub
		if(state==STATE.MOVE)
		{
			context.coordinate.x=(int) event.getX()-context.width/2;
			context.coordinate.y=(int) event.getY()-context.height/2;
		}
	}
	
	
	@Override
	public void create() {
		// TODO Auto-generated method stub
		 
		try {
				
				final Dialog dd=new Dialog(appcontext);
				
				LinearLayout layout=new LinearLayout(appcontext);
				
				final EditText txt=new EditText(appcontext);
				txt.setText("enter text please");
			
				
				Button b2=new Button(appcontext);
				b2.setText("edit");
				b2.setOnTouchListener(new Button.OnTouchListener()
				{

					public boolean onTouch(View v, MotionEvent event) {
						// TODO Auto-generated method stub
						try {
							context.text=txt.getText().toString();
							DrawShapeController c=DrawShapeController.Instance(null,null,null);
							c.model.valueChanged();
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						dd.dismiss();
						return true;
					}
						
						
						
					});
				
				layout.addView(txt);
				layout.addView(b2);
				dd.requestWindowFeature(Window.FEATURE_NO_TITLE);
				dd.setContentView(layout);
				//if(!d.isShowing())
		        
				
				dd.show();
		} catch (IllegalArgumentException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
	}

}
