  $(function(){
    let $progress_Bar=$(".progress_bar");
    let $progress_Line=$(".progress_line");
    let $progress_Dot=$(".progress_dot");
    var progress=new Progress($progress_Bar,$progress_Line,$progress_Dot);
    progress.progressClick();
    progress.progressMove();
  })
//   var progress= Progress($progress_Bar,progress_Line,progress_Dot)