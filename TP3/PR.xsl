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
    
    <xsl:template match="metadata">
        <hr/>
        <table class="w3-table w3-striped">
            
            <tr>
                <td>Key Name:<xsl:value-of select="keyname"/></td>
                <td>Begin Date:<xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <td>Title:<xsl:value-of select="title"/></td>
                <td>End Date:<xsl:value-of select="edate"/></td>
            </tr>
            <tr>
                <td>Subtitle:<xsl:value-of select="subtitle"/></td>
                <td>Supervisor:<a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
            </tr>
        </table>
        <hr/>
    </xsl:template>
    
    <xsl:template match="workteam">
        <h3>WorkTeam:</h3>
        <ul class="w3-ul w3-hoverable">
            <xsl:for-each select="worker">
                <li>Id-<xsl:value-of select="identifier"/> | Name- <xsl:value-of select="name"/> | Email- <a href="mailto:{email}"><xsl:value-of select="email"/></a> | Git- <a href="{git}"><xsl:value-of select="git"/></a> </li>    
            </xsl:for-each>
        </ul>
        <hr/>
    </xsl:template>
    
    <xsl:template match="abstract">
        <h3>Abstract:</h3>
        <xsl:for-each select="p">
            <xsl:apply-templates/> <p/>
        </xsl:for-each>
        <hr/>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
     
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    <xsl:template match="deliverables">
        <h3>Deliverables:</h3>
        <ul>
        <xsl:for-each select="deliverable">
            <li><a href="{@path}"><xsl:value-of select="."/></a></li>
        </xsl:for-each>
        </ul>
        
    </xsl:template>
    
     
</xsl:stylesheet>