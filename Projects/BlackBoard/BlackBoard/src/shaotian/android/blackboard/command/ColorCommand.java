package shaotian.android.blackboard.command;

import shaotian.android.blackboard.utility.Pallette;

public class ColorCommand implements Command{

	int precolor;
	int aftercolor;
	
	public ColorCommand(int presize,int aftersize)
	{
		this.precolor=presize;
		this.aftercolor=aftersize;
	}
	public void undo() {
		// TODO Auto-generated method stub
		Pallette.Instance().color=this.precolor;
		
	}

	public void execute() {
		// TODO Auto-generated method stub
		Pallette.Instance().color=this.aftercolor;
	}
	public void redo() throws Exception {
		// TODO Auto-generated method stub
		
	}

}
