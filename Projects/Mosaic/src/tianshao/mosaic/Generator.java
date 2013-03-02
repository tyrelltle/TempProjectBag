package tianshao.mosaic;

import java.util.ArrayList;
import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Handler;
import android.os.Looper;
import android.util.Pair;

public class Generator {

	int dimw;
	int dimh;
	int imgw;
	int imgh;
	Bitmap orig_bitmap;
	
	ArrayList<Pair<String, Integer>> colorlib;
	int []generated;
	ProgressDialog progressBar;
    Handler progressBarHandler;
	int step=0;
	volatile int subregionfinished=0;
	
	
	public Generator(ArrayList<Pair<String, Integer>> colorlib,Bitmap bitmap,int dimw,int dimh, ProgressDialog progressBar,Handler progressBarHandler)
	{
		Looper.prepare();
		imgh=bitmap.getHeight();
		imgw=bitmap.getWidth();
		
		this.orig_bitmap=bitmap;
		this.progressBar = progressBar;
		this.progressBarHandler=progressBarHandler;
		progressBarHandler = new Handler();
		this.dimw=imgw/dimw;
		this.dimh=imgh/dimh;
		if(this.dimw<this.dimh)
			this.dimw=this.dimh;
		else
			this.dimh=this.dimw;
		this.colorlib=colorlib;

	}
	
	public void generate()
	{	
		generate_(0,0,orig_bitmap.getHeight(),orig_bitmap.getWidth());
	
	}
	public void generate_(int rowst,int colst,int rowend,int colend)
	{
	
		Bitmap downsampled=Bitmap.createScaledBitmap(orig_bitmap, imgw/dimw, imgh/dimh, false);
		int arr2_row_front=rowst;
		int arr2_row_back=rowst;
		int arr2_col_front=colst;
		int arr2_col_back=colst;
		int orig_img_pixel_avgR=0;
		int orig_img_pixel_avgG=0;
		int orig_img_pixel_avgB=0;
		int tmpc=0;
		
		 while(true)
		 {	 
			  try{
				  tmpc=downsampled.getPixel(arr2_col_front/dimw,arr2_row_front/dimh);
			  }
			  catch(Exception e)
			  {
				  e.printStackTrace();
			  }
			  orig_img_pixel_avgR=Color.red(tmpc);
			  orig_img_pixel_avgG=Color.green(tmpc);
			  orig_img_pixel_avgB=Color.blue(tmpc);
			  arr2_row_front+=dimh;
			  arr2_col_front+=dimw;
			  
			 String squareTargetImgPath = closestAve(Color.rgb(orig_img_pixel_avgR, orig_img_pixel_avgG, orig_img_pixel_avgB));	 
			 Bitmap bitmap = loadImg(squareTargetImgPath,dimh,dimw);
			 
			 int array[]=new int[bitmap.getHeight()*bitmap.getWidth()]; 		 
			 bitmap.getPixels(array, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
			 try{
				
				 orig_bitmap.setPixels(array, 0, bitmap.getWidth(), arr2_col_back, arr2_row_back, dimw, dimh);
				
			 }catch(Exception e)
			 {
				 e.printStackTrace();
			 }
			

			 progressBarHandler.post(new Runnable() {
					public void run() {
						step++;
					  progressBar.setProgress(step);
					}
				  });
			 if(arr2_row_front>=rowend&&arr2_col_front>=colend)					 
			 {	 
				
				 return ;
			 }
			
			 
			 if(arr2_col_front>=colend)
			 {	arr2_row_back=arr2_row_front;
			 	arr2_row_front++;
			 	arr2_col_back=arr2_col_front=0;
			 }
			 else
			 {
				 arr2_col_back=arr2_col_front;
				 arr2_col_front++;
				 arr2_row_front=arr2_row_back;
			 }
		 }
		
		
	}
	
	public String closestAve(int comparee)
	{		//time consuming
		
		String retstr=this.colorlib.get(0).first;
		int cval=comparee;
		int minR=Color.red(cval);
		int minG=Color.green(cval);
		int minB=Color.blue(cval);
		int comR=Color.red(cval);
		int comG=Color.green(cval);
		int comB=Color.blue(cval);
		int mindiffavg3=(minR+minG+minB)/3;

		for (Pair<String, Integer> i :this.colorlib) {
			cval=i.second;
			int tmpr=Color.red(cval);
			int tmpg=Color.green(cval);
			int tmpb=Color.blue(cval);
			int tmpdiff=(Math.abs(tmpr-comR)+Math.abs(tmpg-comG)+Math.abs(tmpb-comB))/3;
		    if(tmpdiff<mindiffavg3)
		    {
		    	minR=tmpr;
		    	minG=tmpg;
		    	minB=tmpb;
		    	mindiffavg3=tmpdiff;
		    	retstr=i.first;
		    }
		
		}
	
		return retstr;
	}
	
	Bitmap loadImg(String selectedImage,int reqh,int reqw)
	{
		
		
		
		final BitmapFactory.Options options = new BitmapFactory.Options();
		options.inJustDecodeBounds = true;
		BitmapFactory.decodeFile(selectedImage,options);
		
		options.inSampleSize=1;
		if(options.outHeight!=reqh||options.outWidth!=reqw)
		{
			
		    
		        if (options.outWidth > options.outHeight) {
		            options.inSampleSize = Math.round((float)options.outHeight / (float)reqh);
		        } else {
		        	options.inSampleSize = Math.round((float)options.outWidth / (float)reqw);
		        }
		    
		}

		options.inJustDecodeBounds = false;
		Bitmap ret=BitmapFactory.decodeFile(selectedImage,options);
		return ret;
	}
}
