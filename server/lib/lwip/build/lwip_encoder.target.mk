# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := lwip_encoder
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=lwip_encoder' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-pthread \
	-m64 \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti

INCS_Debug := \
	-I/home/thanhnguyen/.node-gyp/0.10.25/src \
	-I/home/thanhnguyen/.node-gyp/0.10.25/deps/uv/include \
	-I/home/thanhnguyen/.node-gyp/0.10.25/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I$(srcdir)/src/encoder \
	-I$(srcdir)/src/lib/zlib \
	-I$(srcdir)/src/lib/jpeg \
	-I$(srcdir)/src/lib/cimg \
	-I$(srcdir)/src/lib/png \
	-I$(srcdir)/src/lib/gif

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=lwip_encoder' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-pthread \
	-m64 \
	-O2 \
	-fno-strict-aliasing \
	-fno-tree-vrp \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti

INCS_Release := \
	-I/home/thanhnguyen/.node-gyp/0.10.25/src \
	-I/home/thanhnguyen/.node-gyp/0.10.25/deps/uv/include \
	-I/home/thanhnguyen/.node-gyp/0.10.25/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I$(srcdir)/src/encoder \
	-I$(srcdir)/src/lib/zlib \
	-I$(srcdir)/src/lib/jpeg \
	-I$(srcdir)/src/lib/cimg \
	-I$(srcdir)/src/lib/png \
	-I$(srcdir)/src/lib/gif

OBJS := \
	$(obj).target/$(TARGET)/src/encoder/init.o \
	$(obj).target/$(TARGET)/src/encoder/jpeg_worker.o \
	$(obj).target/$(TARGET)/src/encoder/png_worker.o \
	$(obj).target/$(TARGET)/src/encoder/gif_worker.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jdatadst.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jmemnobs.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcomapi.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jerror.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jfdctflt.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jfdctfst.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jfdctint.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jidctflt.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jidctfst.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jidctint.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jutils.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jmemmgr.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jaricom.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jquant1.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jquant2.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcapimin.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcapistd.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jccoefct.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jccolor.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcdctmgr.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jchuff.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcinit.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcmainct.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcmarker.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcmaster.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcparam.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcprepct.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcsample.o \
	$(obj).target/$(TARGET)/src/lib/jpeg/jcarith.o \
	$(obj).target/$(TARGET)/src/lib/png/png.o \
	$(obj).target/$(TARGET)/src/lib/png/pngset.o \
	$(obj).target/$(TARGET)/src/lib/png/pngget.o \
	$(obj).target/$(TARGET)/src/lib/png/pngtrans.o \
	$(obj).target/$(TARGET)/src/lib/png/pngmem.o \
	$(obj).target/$(TARGET)/src/lib/png/pngerror.o \
	$(obj).target/$(TARGET)/src/lib/png/pngwrite.o \
	$(obj).target/$(TARGET)/src/lib/png/pngwutil.o \
	$(obj).target/$(TARGET)/src/lib/png/pngwio.o \
	$(obj).target/$(TARGET)/src/lib/png/pngwtran.o \
	$(obj).target/$(TARGET)/src/lib/zlib/adler32.o \
	$(obj).target/$(TARGET)/src/lib/zlib/crc32.o \
	$(obj).target/$(TARGET)/src/lib/zlib/gzlib.o \
	$(obj).target/$(TARGET)/src/lib/zlib/zutil.o \
	$(obj).target/$(TARGET)/src/lib/zlib/gzwrite.o \
	$(obj).target/$(TARGET)/src/lib/zlib/compress.o \
	$(obj).target/$(TARGET)/src/lib/zlib/deflate.o \
	$(obj).target/$(TARGET)/src/lib/zlib/trees.o \
	$(obj).target/$(TARGET)/src/lib/gif/egif_lib.o \
	$(obj).target/$(TARGET)/src/lib/gif/gif_err.o \
	$(obj).target/$(TARGET)/src/lib/gif/gifalloc.o \
	$(obj).target/$(TARGET)/src/lib/gif/gif_hash.o \
	$(obj).target/$(TARGET)/src/lib/gif/quantize.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64

LIBS :=

$(obj).target/lwip_encoder.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/lwip_encoder.node: LIBS := $(LIBS)
$(obj).target/lwip_encoder.node: TOOLSET := $(TOOLSET)
$(obj).target/lwip_encoder.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/lwip_encoder.node
# Add target alias
.PHONY: lwip_encoder
lwip_encoder: $(builddir)/lwip_encoder.node

# Copy this to the executable output path.
$(builddir)/lwip_encoder.node: TOOLSET := $(TOOLSET)
$(builddir)/lwip_encoder.node: $(obj).target/lwip_encoder.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/lwip_encoder.node
# Short alias for building this executable.
.PHONY: lwip_encoder.node
lwip_encoder.node: $(obj).target/lwip_encoder.node $(builddir)/lwip_encoder.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/lwip_encoder.node

