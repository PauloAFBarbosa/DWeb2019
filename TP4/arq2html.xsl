<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="ARQELEM">
        <h1><xsl:value-of select="IDENTI"/></h1>
        <h2>Arqueossítio do concelho de <xsl:value-of select="CONCEL"/></h2>
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="LATITU">
        <p>Latitude - <xsl:value-of select="."/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="LONGIT">
        <p>Longitude - <xsl:value-of select="."/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="ALTITU">
        <p>Altitude - <xsl:value-of select="."/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <p>• <xsl:value-of select="."/></p>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        <hr/>
        <p><xsl:value-of select="."/></p>
    </xsl:template>
    <xsl:template match="DATA">
        <p><xsl:value-of select="."/></p>
    </xsl:template>
    
</xsl:stylesheet>