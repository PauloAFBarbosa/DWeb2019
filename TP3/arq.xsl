<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8" />
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossitios</title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1>Índice de Arqueossitios</h1>
                    <ol>
                        <xsl:apply-templates mode="indice"/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        
        <xsl:apply-templates/>
        
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <a name="{generate-id()}"/>
        <li><a href="arq-{generate-id()}.html"><xsl:value-of select="IDENTI"/></a></li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="website/arq-{generate-id()}.html">
            <html>
                <head>
                    <title> <xsl:value-of select="TIPO/@ASSUNTO"/> </title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <table class="w3-table">
                        <tr>
                            <th>Nome</th> <td> <xsl:value-of select="IDENTI"/> </td>
                        </tr>
                        <tr>
                            <th>Lugar</th> <td> <xsl:value-of select="LUGAR"/> </td>
                        </tr>
                        <tr>
                            <th>Freguesia</th> <td> <xsl:value-of select="FREGUE"/> </td>
                        </tr>
                        <tr>
                            <th>Concelho</th> <td> <xsl:value-of select="CONCEL"/> </td>
                        </tr>
                        <tr>
                            <th>Latitude</th> <td> <xsl:value-of select="LATITU"/> </td>
                        </tr>
                        <tr>
                            <th>Longitude</th> <td> <xsl:value-of select="LONGIT"/> </td>
                        </tr>
                        <tr>
                            <th>Altitude</th> <td> <xsl:value-of select="ALTITU"/> </td>
                        </tr>
                        
                    </table>
                    <hr/>
                    <address><a href="index.html#{generate-id()}">Voltar ao indice</a></address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    
</xsl:stylesheet>