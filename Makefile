.PHONY: build dev up install

build:
	ddev yarn build
dev: up
	ddev yarn dev
install:
	@echo "applying patches..."
	mkdir -p .ddev/nginx
	cp patches/nginx/vite-dev.conf .ddev/nginx/vite-dev.conf
	cp patches/nginx/share-relative-urls.conf.tmpl .ddev/nginx/share-relative-urls.conf.tmpl
	cp patches/config.node.yaml .ddev/config.node.yaml
	cp patches/config.php.yaml .ddev/config.php.yaml
	cp patches/config.mutagen.yaml .ddev/config.mutagen.yaml

	@echo "cleaning project..."
	rm -rf .all-contributorsrc header.png init.sh Makefile renovate.json szenario-logo.svg
	mv Makefile.default Makefile
	mv .env.example.dev .env
	ddev restart
	ddev yarn install
	ddev craft setup/app-id
	ddev craft setup/security-key
	ddev craft install
	ddev craft plugin/install vite
	ddev craft plugin/install ckeditor
	@echo "adding image transforms..."
	@# craft install wipes config/project, so the transforms are copied in afterwards
	cp -R patches/imageTransforms config/project/imageTransforms
	ddev craft project-config/apply
	@# apply doesn't write the transform names back to project.yaml, leaving a pending diff
	ddev craft project-config/write
	rm -rf patches
	@echo "ready for takeoff 🎉🎉🎉"
	@echo "type 'make dev' to  run vite development server"
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
		ddev start; \
    fi
