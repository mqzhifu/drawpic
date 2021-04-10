<mxfile host="app.diagrams.net" modified="2021-04-10T06:06:22.470Z" agent="5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36" etag="19QBZnVzOTEtV-wIxjZ5" version="14.5.7" type="github">
  <diagram id="LrraPFq0eXV1uZRZkaON" name="Page-1">
    <mxGraphModel dx="2046" dy="1044" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="sybjIimh572mPHmOb9K9-2" value="js/html-文件" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="1" vertex="1">
          <mxGeometry x="590" y="160" width="140" height="104" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-3" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-2" vertex="1">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-7" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-2" vertex="1">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-8" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-2" vertex="1">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-9" value="浏览器-V8" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="80" y="40" width="670" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-11" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="1" source="sybjIimh572mPHmOb9K9-10" target="sybjIimh572mPHmOb9K9-3" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-10" value="扫描每个&lt;br&gt;&amp;lt;script&amp;gt;&amp;lt;/script&lt;br&gt;块" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="182" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-12" value="词法分析&lt;br&gt;转TOKEN" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="290" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-15" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="1" source="sybjIimh572mPHmOb9K9-13" target="sybjIimh572mPHmOb9K9-14" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-13" value="语法错误" style="rhombus;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="130" y="490" width="80" height="80" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-16" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="1" source="sybjIimh572mPHmOb9K9-14" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="390" y="210" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-14" value="结束" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="280" y="500" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-17" value="预处理" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="640" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-18" value="寻找关键字var和function&lt;br&gt;开头的语句" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="740" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-19" value="开始&lt;br&gt;正式执行代码" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="920" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-20" value="语法分析&lt;br&gt;转&lt;br&gt;语法树AST" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="390" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-21" value="execution context" style="swimlane;" parent="1" vertex="1">
          <mxGeometry x="40" y="1400" width="360" height="230" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-22" value="callObject" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" parent="sybjIimh572mPHmOb9K9-21" vertex="1">
          <mxGeometry x="20" y="40" width="300" height="156" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-23" value="varDecls-内部变量表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-22" vertex="1">
          <mxGeometry y="26" width="300" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-24" value="funDecls-内嵌函数表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-22" vertex="1">
          <mxGeometry y="52" width="300" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-25" value="upvalue-父级引用列表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-22" vertex="1">
          <mxGeometry y="78" width="300" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-27" value="this" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-22" vertex="1">
          <mxGeometry y="104" width="300" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-29" value="..." style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="sybjIimh572mPHmOb9K9-22" vertex="1">
          <mxGeometry y="130" width="300" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-26" value="&lt;span style=&quot;text-align: left&quot;&gt;varDecls&lt;br&gt;&lt;/span&gt;&lt;span style=&quot;text-align: left&quot;&gt;funDecls&lt;br&gt;&lt;/span&gt;&lt;span style=&quot;text-align: left&quot;&gt;在预处理阶段&lt;br&gt;就已经得到&lt;br&gt;&lt;/span&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="510" y="1300" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-28" value="&lt;span style=&quot;text-align: left&quot;&gt;scopeChain&lt;/span&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="510" y="1400" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-32" value="输出结果" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="240" y="1970" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-33" value="&lt;span style=&quot;text-align: left&quot;&gt;Variable Environment&lt;/span&gt;" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="670" y="1305" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-34" value="创建全局" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="1010" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-35" value="全局执行环境" style="swimlane;" parent="1" vertex="1">
          <mxGeometry x="370" y="1000" width="200" height="200" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-36" value="windows&lt;br&gt;object" style="rounded=0;whiteSpace=wrap;html=1;" parent="sybjIimh572mPHmOb9K9-35" vertex="1">
          <mxGeometry x="20" y="40" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-31" value="代码-执行" style="swimlane;" parent="1" vertex="1">
          <mxGeometry x="40" y="1660" width="300" height="200" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-37" value="global execution context" style="swimlane;" parent="1" vertex="1">
          <mxGeometry x="60" y="1130" width="200" height="200" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-45" value="将其作用域-提升&lt;br&gt;不会真的赋值&lt;br&gt;而是undefine" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="820" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-47" value="代码执行被拆分成&lt;br&gt;两个阶段：预处理&lt;br&gt;执行" style="rounded=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="310" y="820" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-7" value="Container" style="swimlane;" vertex="1" parent="1">
          <mxGeometry x="30" y="2210" width="540" height="500" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-8" value="ECObj = { &lt;br&gt;scopChain： {...}, &lt;br&gt;variableObject: { arguments: { 0: 22, length: 1 },&lt;br&gt;&amp;nbsp;i: 22,&lt;br&gt;&amp;nbsp;c: pointer to function c() &lt;br&gt;a: undefined,&lt;br&gt;&amp;nbsp;b: undefined }, &lt;br&gt;this: { ... } &lt;br&gt;}" style="rounded=0;whiteSpace=wrap;html=1;align=left;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-7">
          <mxGeometry x="20" y="50" width="300" height="360" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-9" value="Creation Stage" style="swimlane;" vertex="1" parent="1">
          <mxGeometry x="790" y="1720" width="440" height="600" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-1" value="Variable object" style="swimlane;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-9">
          <mxGeometry x="37" y="130" width="170" height="340" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-3" value="arguments&lt;br&gt;Object" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-1">
          <mxGeometry x="20" y="50" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-4" value="function&lt;br&gt;Declaration" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-1">
          <mxGeometry x="20" y="150" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-5" value="var&lt;br&gt;Declaration" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-1">
          <mxGeometry x="20" y="250" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-2" value="scopeChain" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-9">
          <mxGeometry x="40" y="40" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-14" value="确定this指向" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-9">
          <mxGeometry x="40" y="510" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="GLcWbR3M1zZIn5tLLmif-15" value="&lt;span style=&quot;text-align: left&quot;&gt;upvalue&lt;br&gt;父级引用列表&lt;/span&gt;" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="GLcWbR3M1zZIn5tLLmif-9">
          <mxGeometry x="270" y="40" width="120" height="60" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
