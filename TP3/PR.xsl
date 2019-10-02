<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8" />
    
    <xsl:template match="/">
        <html>
            <head>
                <title>PR</title>
                <meta charset="UTF8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="pr">
        <hr/>
        <table class="w3-table w3-striped">
            
            <tr>
                <td>Key Name:<xsl:value-of select="metadata/keyname"/></td>
                <td>Begin Date:<xsl:value-of select="metadata/bdate"/></td>
            </tr>
            <tr>
                <td>Title:<xsl:value-of select="metadata/title"/></td>
                <td>End Date:<xsl:value-of select="metadata/edate"/></td>
            </tr>
            <tr>
                <td>Subtitle:<xsl:value-of select="metadata/subtitle"/></td>
                <td>Supervisor:<a href="{metadata/supervisor/@homepage}"><xsl:value-of select="metadata/supervisor"/></a></td>
            </tr>
        </table>
        <hr/>
        
        <h3>WorkTeam:</h3>
        <ul class="w3-ul w3-hoverable">
            <xsl:for-each select="workteam/worker">
                <li>Id-<xsl:value-of select="identifier"/> | Name- <xsl:value-of select="name"/> | Email- <a href="mailto:{email}"><xsl:value-of select="email"/></a> | Git- <a href="{git}"><xsl:value-of select="git"/></a> </li>    
            </xsl:for-each>
        </ul>
        <hr/>
        
        <h3>Abstract:</h3>
        <xsl:for-each select="abstract/p">
            <xsl:value-of select="."/><p/>
        </xsl:for-each>
        <hr/>
        
        <h3>Deliverables:</h3>
        <ul>
        <xsl:for-each select="deliverables/deliverable">
            <li><a href="{@path}"><xsl:value-of select="."/></a></li>
        </xsl:for-each>
        </ul>
        
    </xsl:template>
    
     
</xsl:stylesheet>