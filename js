<mxfile host="app.diagrams.net" modified="2021-04-09T16:57:12.272Z" agent="5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36" etag="NRvMwf42mlS8AfSCgI_n" version="14.5.10" type="github">
  <diagram id="LrraPFq0eXV1uZRZkaON" name="Page-1">
    <mxGraphModel dx="1422" dy="804" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="sybjIimh572mPHmOb9K9-2" value="js/html-文件" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="590" y="160" width="140" height="104" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-3" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-2">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-7" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-2">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-8" value="&lt;script&gt;...&lt;/script&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-2">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-9" value="浏览器-V8" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="40" width="670" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-11" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="sybjIimh572mPHmOb9K9-10" target="sybjIimh572mPHmOb9K9-3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-10" value="扫描每个&lt;br&gt;&amp;lt;script&amp;gt;&amp;lt;/script&lt;br&gt;块" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="182" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-12" value="语法分析&lt;br&gt;词法分析" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="290" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-15" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="sybjIimh572mPHmOb9K9-13" target="sybjIimh572mPHmOb9K9-14">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-13" value="语法错误" style="rhombus;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="140" y="400" width="80" height="80" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-16" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="sybjIimh572mPHmOb9K9-14">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="390" y="210" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-14" value="结束" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="280" y="410" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-17" value="预处理" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="640" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-18" value="var他function&lt;br&gt;开头的语句" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="765" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-19" value="开始执行代码" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="905" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-20" value="语法树" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="520" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-21" value="execution context" style="swimlane;" vertex="1" parent="1">
          <mxGeometry x="120" y="1020" width="200" height="200" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-22" value="callObject" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="390" y="1020" width="140" height="104" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-23" value="varDecls-内部变量表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-22">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-24" value="funDecls-内嵌函数表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-22">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-25" value="upvalue-父级引用列表" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="sybjIimh572mPHmOb9K9-22">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="sybjIimh572mPHmOb9K9-26" value="&lt;span style=&quot;text-align: left&quot;&gt;varDecls&lt;br&gt;&lt;/span&gt;&lt;span style=&quot;text-align: left&quot;&gt;funDecls&lt;br&gt;&lt;/span&gt;&lt;span style=&quot;text-align: left&quot;&gt;在预处理阶段&lt;br&gt;就已经得到&lt;br&gt;&lt;/span&gt;" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="560" y="1020" width="120" height="60" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
