import static org.junit.Assert.*;

import java.io.Console;
import java.util.UUID;

import org.json.simple.JSONObject;
import org.junit.Test;



import shaotian.iquestion.QuestionManager.QuestionSet;
import shaotian.iquestion.QuestionManager.QuestionSet;
import shaotian.iquestion.question.IQuestion;
import shaotian.iquestion.question.MultipleChoiceQuestion;
import shaotian.iquestion.question.SingleAnswerQuestion;
import shaotian.iquestion.selection.MultiSelection;
import shaotian.iquestion.selection.SingleAnswer;
import shaotian.iquestion.token.TextToken;


public class IQuestionTest {



	

	
	@Test
	public void testQuestionSet() {
		QuestionSet qmgr=new QuestionSet();
		IQuestion q=new MultipleChoiceQuestion();
		UUID qid;
		qid=qmgr.addQuestion(q);
		q.setQuestion(new TextToken("what are you"));
		q.addSelection(new TextToken("what the"), false);
		q.addSelection(new TextToken("hero"), true);
		q.addSelection(new TextToken("what"), true);
		q.addSelection(new TextToken("wt the"), false);
		q.addSelection(new TextToken("heo"), true);
		q.addSelection(new TextToken("wt"), false);
		qmgr.addAnswer(qid, new MultiSelection(1,2,3));
		
		
		IQuestion q2=new SingleAnswerQuestion();
		qid=qmgr.addQuestion(q2);
		q2.setQuestion(new TextToken("i am ok"));
		q2.addSelection(new TextToken("i am ok"), false);

		qmgr.addAnswer(qid, new SingleAnswer(new TextToken("i amok")));
		
		JSONObject json=new JSONObject();
		qmgr.evaluate(json);
		System.out.print(json.toJSONString());
		//fail("Not yet implemented");
	}
	

}
