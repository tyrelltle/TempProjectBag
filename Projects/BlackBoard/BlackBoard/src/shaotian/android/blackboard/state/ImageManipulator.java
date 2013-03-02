package shaotian.android.blackboard.state;

import shaotian.android.blackboard.R;
import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.controller.DrawShapeController;
import shaotian.android.blackboard.state.Manipulator.STATE;
import shaotian.android.blackboard.utility.ColorPanelOnTouchListener;
import shaotian.android.blackboard.utility.ImageAdapter;
import shaotian.android.blackboard.utility.SupportColors;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.GridView;
import android.widget.LinearLayout;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.AdapterView.OnItemClickListener;

public class ImageManipulator extends Manipulator{



	public ImageManipulator(DrawableContextNode c, Context a) {
		super(c, a);
		// TODO Auto-generated constructor stub
	}

	@Override
	public
	void click(MotionEvent event) {
		// TODO Auto-generated method stub
		
		if(state==STATE.NONE)
		{	final Dialog d=new Dialog(appcontext);
			
			
			LinearLayout table=new LinearLayout(appcontext);
			
			Button b=new Button(appcontext);
			b.setText("move");
			b.setOnTouchListener(new Manipulator.moveListener(d, this));
			
			Button b2=new Button(appcontext);
			b2.setText("edit");
			b2.setOnTouchListener(new ImageManipulator.editListener(d, this,context));
			
			table.addView(b);
			table.addView(b2);
			d.requestWindowFeature(Window.FEATURE_NO_TITLE);
			d.setContentView(table);
			//if(!d.isShowing())
			d.show();
		}
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
	
	class editListener implements Button.OnTouchListener
	{
		Dialog dialog;
		Manipulator manipulator;
		DrawableContextNode node;
		ImageAdapter adapter;
		public editListener(Dialog d,Manipulator m, DrawableContextNode n)
		{
			this.dialog=d;
			this.manipulator=m;
			this.node=n;
		}
		public boolean onTouch(View v, MotionEvent event) {
			// TODO Auto-generated method stub
			try {
				adapter  = new ImageAdapter(v.getContext());
			} catch (IllegalArgumentException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IllegalAccessException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
			manipulator.state=STATE.EDIT;
			
			dialog.dismiss();
			
			//display image pick view
			final Dialog dd=new Dialog(v.getContext());
			dd.requestWindowFeature(Window.FEATURE_NO_TITLE);
			dd.setContentView(R.layout.imagepanel);
	        GridView gv=(GridView)dd.findViewById(R.id.imagegridview);
	        try {
				gv.setAdapter(new ImageAdapter(dd.getContext()));
			} catch (IllegalArgumentException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        
	        gv.setOnItemClickListener(new OnItemClickListener() {
	         
				public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
						long arg3) {
					//Pallette.Instance().picture=adapter.imgs.get(arg2);
					//startActivity(new Intent(Intent.ACTION_EDIT));
					
					node.picture=adapter.imgs.get(arg2);
					dd.dismiss();
					try {
						DrawShapeController c=DrawShapeController.Instance(null,null,null);
						c.model.valueChanged();
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
	        });
	        
			
			dd.show();
			return true;
		}
		
	}

	@Override
	public void create() {
		// TODO Auto-generated method stub
		 
		try {
				final ImageAdapter adapter  = new ImageAdapter(appcontext);
				//display image pick view
				final Dialog dd=new Dialog(appcontext);
				dd.requestWindowFeature(Window.FEATURE_NO_TITLE);
				dd.setContentView(R.layout.imagepanel);
		        GridView gv=(GridView)dd.findViewById(R.id.imagegridview);
		        try {
					gv.setAdapter(new ImageAdapter(dd.getContext()));
				} catch (IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        
		        gv.setOnItemClickListener(new OnItemClickListener() {
		         
					public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
							long arg3) {

						context.picture=adapter.imgs.get(arg2);
						dd.dismiss();
						try {
							DrawShapeController c=DrawShapeController.Instance(null,null,null);
							c.model.valueChanged();
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}
		        });
		        
				
				dd.show();
		} catch (IllegalArgumentException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IllegalAccessException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
	}

}
