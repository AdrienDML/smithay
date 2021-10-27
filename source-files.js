var N = null;var sourcesIndex = {};
sourcesIndex["calloop"] = {"name":"","dirs":[{"name":"sources","files":["channel.rs","generic.rs","mod.rs","ping.rs","signals.rs","timer.rs"]},{"name":"sys","files":["epoll.rs","mod.rs"]}],"files":["io.rs","lib.rs","list.rs","loop_logic.rs"]};
sourcesIndex["dbus"] = {"name":"","dirs":[{"name":"arg","files":["array_impl.rs","basic_impl.rs","messageitem.rs","mod.rs","msgarg.rs","variantstruct_impl.rs"]},{"name":"blocking","files":["generated_org_freedesktop_dbus.rs","generated_org_freedesktop_standard_interfaces.rs"]},{"name":"channel","files":["ffichannel.rs"]},{"name":"ffidisp","files":["connection.rs","stdintf.rs","watch.rs"]},{"name":"message","files":["matchrule.rs","signalargs.rs"]}],"files":["blocking.rs","channel.rs","error.rs","ffidisp.rs","filters.rs","lib.rs","message.rs","strings.rs"]};
sourcesIndex["drm"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"control","files":["atomic.rs","connector.rs","crtc.rs","dumbbuffer.rs","encoder.rs","framebuffer.rs","mod.rs","plane.rs","property.rs"]}],"files":["lib.rs","util.rs"]};
sourcesIndex["gbm"] = {"name":"","files":["buffer_object.rs","device.rs","lib.rs","surface.rs"]};
sourcesIndex["input"] = {"name":"","dirs":[{"name":"event","dirs":[{"name":"tablet_pad","files":["mode_group.rs"]},{"name":"tablet_tool","files":["tool.rs"]}],"files":["device.rs","gesture.rs","keyboard.rs","pointer.rs","switch.rs","tablet_pad.rs","tablet_tool.rs","touch.rs"]}],"files":["context.rs","device.rs","event.rs","lib.rs","seat.rs"]};
sourcesIndex["nix"] = {"name":"","dirs":[{"name":"mount","files":["linux.rs","mod.rs"]},{"name":"net","files":["if_.rs","mod.rs"]},{"name":"sys","dirs":[{"name":"ioctl","files":["linux.rs","mod.rs"]},{"name":"ptrace","files":["linux.rs","mod.rs"]},{"name":"socket","files":["addr.rs","mod.rs","sockopt.rs"]}],"files":["aio.rs","epoll.rs","eventfd.rs","inotify.rs","memfd.rs","mman.rs","mod.rs","personality.rs","pthread.rs","quota.rs","reboot.rs","select.rs","sendfile.rs","signal.rs","signalfd.rs","stat.rs","statfs.rs","statvfs.rs","sysinfo.rs","termios.rs","time.rs","timerfd.rs","uio.rs","utsname.rs","wait.rs"]}],"files":["dir.rs","env.rs","errno.rs","fcntl.rs","features.rs","ifaddrs.rs","kmod.rs","lib.rs","macros.rs","mqueue.rs","poll.rs","pty.rs","sched.rs","time.rs","ucontext.rs","unistd.rs"]};
sourcesIndex["slog"] = {"name":"","dirs":[{"name":"key","files":["mod.rs","static.rs"]}],"files":["lib.rs"]};
sourcesIndex["smithay"] = {"name":"","dirs":[{"name":"backend","dirs":[{"name":"allocator","files":["dmabuf.rs","dumb.rs","gbm.rs","mod.rs","swapchain.rs"]},{"name":"drm","dirs":[{"name":"device","files":["atomic.rs","legacy.rs","mod.rs"]},{"name":"node","files":["constants.rs","mod.rs"]},{"name":"surface","files":["atomic.rs","gbm.rs","legacy.rs","mod.rs"]}],"files":["error.rs","mod.rs","session.rs"]},{"name":"egl","files":["context.rs","display.rs","error.rs","ffi.rs","mod.rs","native.rs","surface.rs"]},{"name":"input","files":["mod.rs","tablet.rs"]},{"name":"libinput","files":["mod.rs","tablet.rs"]},{"name":"renderer","dirs":[{"name":"gles2","files":["mod.rs","shaders.rs","version.rs"]}],"files":["mod.rs"]},{"name":"session","dirs":[{"name":"dbus","files":["logind.rs","mod.rs"]}],"files":["auto.rs","direct.rs","mod.rs"]},{"name":"x11","files":["buffer.rs","error.rs","extension.rs","input.rs","mod.rs","window_inner.rs"]}],"files":["mod.rs","udev.rs","winit.rs"]},{"name":"utils","files":["geometry.rs","mod.rs","signaling.rs","x11rb.rs"]},{"name":"wayland","dirs":[{"name":"compositor","files":["cache.rs","handlers.rs","mod.rs","transaction.rs","tree.rs"]},{"name":"data_device","files":["data_source.rs","dnd_grab.rs","mod.rs","server_dnd_grab.rs"]},{"name":"dmabuf","files":["mod.rs"]},{"name":"explicit_synchronization","files":["mod.rs"]},{"name":"output","files":["mod.rs","xdg.rs"]},{"name":"seat","files":["keyboard.rs","mod.rs","pointer.rs"]},{"name":"shell","dirs":[{"name":"legacy","files":["mod.rs","wl_handlers.rs"]},{"name":"wlr_layer","files":["handlers.rs","mod.rs","types.rs"]},{"name":"xdg","files":["mod.rs","xdg_handlers.rs"]}],"files":["mod.rs"]},{"name":"shm","files":["mod.rs","pool.rs"]},{"name":"tablet_manager","files":["mod.rs","tablet.rs","tablet_seat.rs","tablet_tool.rs"]},{"name":"xdg_activation","files":["handlers.rs","mod.rs"]},{"name":"xdg_foreign","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"xwayland","files":["mod.rs","x11_sockets.rs","xserver.rs"]}],"files":["lib.rs","reexports.rs"]};
sourcesIndex["udev"] = {"name":"","files":["device.rs","enumerator.rs","lib.rs","list.rs","monitor.rs","udev.rs","util.rs"]};
sourcesIndex["wayland_commons"] = {"name":"","files":["debug.rs","filter.rs","lib.rs","map.rs","socket.rs","user_data.rs","wire.rs"]};
sourcesIndex["wayland_protocols"] = {"name":"","files":["lib.rs","misc.rs","protocol_macro.rs","stable.rs","staging.rs","unstable.rs","wlr.rs"]};
sourcesIndex["wayland_server"] = {"name":"","dirs":[{"name":"native_lib","files":["client.rs","display.rs","globals.rs","mod.rs","resource.rs"]}],"files":["client.rs","display.rs","globals.rs","lib.rs","resource.rs"]};
sourcesIndex["winit"] = {"name":"","dirs":[{"name":"platform","files":["mod.rs","run_return.rs","unix.rs"]},{"name":"platform_impl","dirs":[{"name":"linux","dirs":[{"name":"wayland","dirs":[{"name":"event_loop","files":["mod.rs","proxy.rs","sink.rs","state.rs"]},{"name":"seat","dirs":[{"name":"keyboard","files":["handlers.rs","keymap.rs","mod.rs"]},{"name":"pointer","files":["data.rs","handlers.rs","mod.rs"]},{"name":"text_input","files":["handlers.rs","mod.rs"]},{"name":"touch","files":["handlers.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"window","files":["mod.rs","shim.rs"]}],"files":["env.rs","mod.rs","output.rs"]},{"name":"x11","dirs":[{"name":"ime","files":["callbacks.rs","context.rs","inner.rs","input_method.rs","mod.rs"]},{"name":"util","files":["atom.rs","client_msg.rs","cursor.rs","format.rs","geometry.rs","hint.rs","icon.rs","input.rs","keys.rs","memory.rs","mod.rs","modifiers.rs","randr.rs","window_property.rs","wm.rs"]}],"files":["dnd.rs","event_processor.rs","events.rs","ffi.rs","mod.rs","monitor.rs","window.rs","xdisplay.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["dpi.rs","error.rs","event.rs","event_loop.rs","icon.rs","lib.rs","monitor.rs","window.rs"]};
createSourceSidebar();
