FROM httpd:2.4

# Enable proxy modules
RUN sed -i 's/^#LoadModule proxy_module/LoadModule proxy_module/' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/^#LoadModule proxy_http_module/LoadModule proxy_http_module/' /usr/local/apache2/conf/httpd.conf

# Copy apache config
COPY apache.conf /usr/local/apache2/conf/extra/apache.conf

# Include custom config
RUN echo "Include conf/extra/apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
