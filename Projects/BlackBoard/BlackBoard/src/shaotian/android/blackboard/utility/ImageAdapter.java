package shaotian.android.blackboard.utility;

import java.lang.reflect.Field;
import java.util.ArrayList;

import shaotian.android.blackboard.R;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.TableRow;

public class ImageAdapter extends BaseAdapter{
	private Context mContext;
	public ArrayList<Integer> imgs;
	public ImageAdapter(Context c) throws IllegalArgumentException, IllegalAccessException
	{
		mContext=c;
		final Class<R.drawable> rc=R.drawable.class;
		final Field fields[]=rc.getDeclaredFields();
		imgs=new ArrayList<Integer>();
		for(int i=0;i<fields.length;i++)
		{
			imgs.add(fields[i].getInt(new R.drawable()));
		
		}
	}
	
	public int getCount() {
		// TODO Auto-generated method stub
		return imgs.size();
	}

	public Object getItem(int arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	public long getItemId(int arg0) {
		// TODO Auto-generated method stub
		return 0;
	}

	public View getView(int position, View convertView, ViewGroup parent) {
		// TODO Auto-generated method stub
        ImageView imageView;
        if (convertView == null) {  // if it's not recycled, initialize some attributes
            imageView = new ImageView(mContext);
            imageView.setLayoutParams(new GridView.LayoutParams(85, 85));
            imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
            imageView.setPadding(8, 8, 8, 8);
        } else {
            imageView = (ImageView) convertView;
        }

        imageView.setImageResource(imgs.get(position));
        return imageView;
	}

}
