package shaotian.android.blackboard.command;

public interface   Command {
	public void undo() throws Exception;
	public void redo() throws Exception;
	public void execute() throws Exception;
	
	
}
